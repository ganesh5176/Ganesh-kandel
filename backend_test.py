#!/usr/bin/env python3
"""
Backend API Testing Suite for Portfolio Website
Tests FastAPI server functionality, database operations, and API endpoints
"""

import requests
import json
import sys
from datetime import datetime
from typing import Dict, Any
import uuid

# Configuration
BACKEND_URL = "https://dev-kandel.preview.emergentagent.com/api"
TIMEOUT = 30

class BackendTester:
    def __init__(self):
        self.results = {
            "server_health": False,
            "api_endpoints": False,
            "database_connection": False,
            "cors_configuration": False,
            "response_format": False,
            "error_handling": False,
            "details": []
        }
        
    def log_result(self, test_name: str, success: bool, message: str, details: str = ""):
        """Log test result with details"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {message}")
        if details:
            print(f"   Details: {details}")
        
        self.results["details"].append({
            "test": test_name,
            "success": success,
            "message": message,
            "details": details
        })
    
    def test_server_health(self) -> bool:
        """Test if FastAPI server is running and responding"""
        print("\n=== Testing Server Health ===")
        try:
            response = requests.get(f"{BACKEND_URL}/", timeout=TIMEOUT)
            
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_result("Server Health", True, "Server is running and responding correctly")
                    return True
                else:
                    self.log_result("Server Health", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_result("Server Health", False, f"Server returned status code: {response.status_code}")
                return False
                
        except requests.exceptions.ConnectionError:
            self.log_result("Server Health", False, "Cannot connect to server - server may be down")
            return False
        except requests.exceptions.Timeout:
            self.log_result("Server Health", False, "Server request timed out")
            return False
        except Exception as e:
            self.log_result("Server Health", False, f"Unexpected error: {str(e)}")
            return False
    
    def test_api_endpoints(self) -> bool:
        """Test all available API endpoints"""
        print("\n=== Testing API Endpoints ===")
        all_passed = True
        
        # Test GET /api/ endpoint
        try:
            response = requests.get(f"{BACKEND_URL}/", timeout=TIMEOUT)
            if response.status_code == 200:
                self.log_result("GET /api/", True, "Root endpoint working correctly")
            else:
                self.log_result("GET /api/", False, f"Status code: {response.status_code}")
                all_passed = False
        except Exception as e:
            self.log_result("GET /api/", False, f"Error: {str(e)}")
            all_passed = False
        
        # Test GET /api/status endpoint (should return empty list initially)
        try:
            response = requests.get(f"{BACKEND_URL}/status", timeout=TIMEOUT)
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result("GET /api/status", True, f"Status endpoint working, returned {len(data)} items")
                else:
                    self.log_result("GET /api/status", False, f"Expected list, got: {type(data)}")
                    all_passed = False
            else:
                self.log_result("GET /api/status", False, f"Status code: {response.status_code}")
                all_passed = False
        except Exception as e:
            self.log_result("GET /api/status", False, f"Error: {str(e)}")
            all_passed = False
        
        return all_passed
    
    def test_database_connection(self) -> bool:
        """Test database operations through POST and GET endpoints"""
        print("\n=== Testing Database Connection ===")
        
        # Test POST /api/status to create a status check
        test_client_name = f"test_client_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        try:
            # Create a status check
            post_data = {"client_name": test_client_name}
            response = requests.post(
                f"{BACKEND_URL}/status", 
                json=post_data,
                headers={"Content-Type": "application/json"},
                timeout=TIMEOUT
            )
            
            if response.status_code == 200:
                created_item = response.json()
                
                # Verify the created item has required fields
                required_fields = ["id", "client_name", "timestamp"]
                missing_fields = [field for field in required_fields if field not in created_item]
                
                if not missing_fields:
                    if created_item["client_name"] == test_client_name:
                        self.log_result("POST /api/status", True, "Successfully created status check in database")
                        
                        # Now test if we can retrieve it
                        get_response = requests.get(f"{BACKEND_URL}/status", timeout=TIMEOUT)
                        if get_response.status_code == 200:
                            all_items = get_response.json()
                            found_item = any(item["client_name"] == test_client_name for item in all_items)
                            
                            if found_item:
                                self.log_result("Database Persistence", True, "Data successfully persisted and retrieved from database")
                                return True
                            else:
                                self.log_result("Database Persistence", False, "Created item not found in database")
                                return False
                        else:
                            self.log_result("Database Retrieval", False, f"Failed to retrieve data: {get_response.status_code}")
                            return False
                    else:
                        self.log_result("POST /api/status", False, f"Client name mismatch: expected {test_client_name}, got {created_item['client_name']}")
                        return False
                else:
                    self.log_result("POST /api/status", False, f"Missing required fields: {missing_fields}")
                    return False
            else:
                self.log_result("POST /api/status", False, f"Failed to create status check: {response.status_code}")
                if response.text:
                    print(f"   Response: {response.text}")
                return False
                
        except Exception as e:
            self.log_result("Database Connection", False, f"Error testing database: {str(e)}")
            return False
    
    def test_cors_configuration(self) -> bool:
        """Test CORS configuration"""
        print("\n=== Testing CORS Configuration ===")
        
        try:
            # Test preflight request
            headers = {
                "Origin": "https://dev-kandel.preview.emergentagent.com",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
            
            response = requests.options(f"{BACKEND_URL}/status", headers=headers, timeout=TIMEOUT)
            
            # Check if CORS headers are present
            cors_headers = {
                "access-control-allow-origin": response.headers.get("access-control-allow-origin"),
                "access-control-allow-methods": response.headers.get("access-control-allow-methods"),
                "access-control-allow-headers": response.headers.get("access-control-allow-headers")
            }
            
            if any(cors_headers.values()):
                self.log_result("CORS Configuration", True, "CORS headers are present", f"Headers: {cors_headers}")
                return True
            else:
                self.log_result("CORS Configuration", False, "No CORS headers found in response")
                return False
                
        except Exception as e:
            self.log_result("CORS Configuration", False, f"Error testing CORS: {str(e)}")
            return False
    
    def test_response_format(self) -> bool:
        """Test that API responses are properly formatted JSON"""
        print("\n=== Testing Response Format ===")
        
        try:
            # Test root endpoint response format
            response = requests.get(f"{BACKEND_URL}/", timeout=TIMEOUT)
            
            if response.status_code == 200:
                try:
                    data = response.json()
                    if isinstance(data, dict) and "message" in data:
                        self.log_result("JSON Response Format", True, "API returns properly formatted JSON")
                        
                        # Test content type header
                        content_type = response.headers.get("content-type", "")
                        if "application/json" in content_type:
                            self.log_result("Content-Type Header", True, f"Correct content-type: {content_type}")
                            return True
                        else:
                            self.log_result("Content-Type Header", False, f"Incorrect content-type: {content_type}")
                            return False
                    else:
                        self.log_result("JSON Response Format", False, f"Unexpected response structure: {data}")
                        return False
                except json.JSONDecodeError:
                    self.log_result("JSON Response Format", False, "Response is not valid JSON")
                    return False
            else:
                self.log_result("Response Format", False, f"Server error: {response.status_code}")
                return False
                
        except Exception as e:
            self.log_result("Response Format", False, f"Error testing response format: {str(e)}")
            return False
    
    def test_error_handling(self) -> bool:
        """Test error scenarios and proper error responses"""
        print("\n=== Testing Error Handling ===")
        
        try:
            # Test invalid endpoint
            response = requests.get(f"{BACKEND_URL}/nonexistent", timeout=TIMEOUT)
            
            if response.status_code == 404:
                self.log_result("404 Error Handling", True, "Server properly returns 404 for invalid endpoints")
            else:
                self.log_result("404 Error Handling", False, f"Expected 404, got: {response.status_code}")
            
            # Test invalid POST data
            invalid_data = {"invalid_field": "test"}
            response = requests.post(
                f"{BACKEND_URL}/status",
                json=invalid_data,
                headers={"Content-Type": "application/json"},
                timeout=TIMEOUT
            )
            
            if response.status_code in [400, 422]:  # 422 is common for validation errors in FastAPI
                self.log_result("Validation Error Handling", True, f"Server properly handles invalid data with status {response.status_code}")
                return True
            else:
                self.log_result("Validation Error Handling", False, f"Expected 400/422, got: {response.status_code}")
                return False
                
        except Exception as e:
            self.log_result("Error Handling", False, f"Error testing error handling: {str(e)}")
            return False
    
    def run_all_tests(self) -> Dict[str, Any]:
        """Run all backend tests and return results"""
        print(f"🚀 Starting Backend API Tests for: {BACKEND_URL}")
        print("=" * 60)
        
        # Run all tests
        self.results["server_health"] = self.test_server_health()
        self.results["api_endpoints"] = self.test_api_endpoints()
        self.results["database_connection"] = self.test_database_connection()
        self.results["cors_configuration"] = self.test_cors_configuration()
        self.results["response_format"] = self.test_response_format()
        self.results["error_handling"] = self.test_error_handling()
        
        # Summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        passed_tests = sum(1 for key, value in self.results.items() if key != "details" and value)
        total_tests = len([key for key in self.results.keys() if key != "details"])
        
        for test_name, result in self.results.items():
            if test_name != "details":
                status = "✅ PASS" if result else "❌ FAIL"
                print(f"{status} {test_name.replace('_', ' ').title()}")
        
        print(f"\n📈 Overall Result: {passed_tests}/{total_tests} tests passed")
        
        if passed_tests == total_tests:
            print("🎉 All backend tests passed successfully!")
        else:
            print("⚠️  Some backend tests failed - check details above")
        
        return self.results

def main():
    """Main function to run backend tests"""
    tester = BackendTester()
    results = tester.run_all_tests()
    
    # Exit with appropriate code
    all_passed = all(value for key, value in results.items() if key != "details")
    sys.exit(0 if all_passed else 1)

if __name__ == "__main__":
    main()