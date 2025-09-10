# Admin Profile API Endpoints

This document outlines the API endpoints needed for the Admin Profile functionality.

## Base URL
```
${BACKEND_URL}/api/admin
```

## Authentication
All endpoints require admin authentication via cookies (withCredentials: true).

## Endpoints

### 1. Get Admin Profile
**GET** `/profile`

**Response:**
```json
{
  "id": "admin-001",
  "name": "Admin User",
  "email": "admin@33researchlabs.com",
  "role": "Super Admin",
  "lastLogin": "2024-01-15T10:30:00Z",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

### 2. Update Email Address
**PATCH** `/update-email`

**Request Body:**
```json
{
  "currentEmail": "admin@33researchlabs.com",
  "newEmail": "newemail@33researchlabs.com"
}
```

**Response (Success):**
```json
{
  "message": "Email updated successfully",
  "newEmail": "newemail@33researchlabs.com"
}
```

**Response (Error):**
```json
{
  "message": "Invalid current email address"
}
```

### 3. Update Password
**PATCH** `/update-password`

**Request Body:**
```json
{
  "currentPassword": "currentpassword123",
  "newPassword": "newpassword123"
}
```

**Response (Success):**
```json
{
  "message": "Password updated successfully"
}
```

**Response (Error):**
```json
{
  "message": "Current password is incorrect"
}
```

## Error Handling

All endpoints return appropriate HTTP status codes:
- `200` - Success
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid credentials)
- `403` - Forbidden (insufficient permissions)
- `500` - Internal Server Error

## Security Notes

1. **Password Requirements:**
   - Minimum 8 characters
   - Should contain uppercase, lowercase, numbers, and special characters

2. **Email Validation:**
   - Must be a valid email format
   - Should not already exist in the system

3. **Rate Limiting:**
   - Implement rate limiting for password update attempts
   - Lock account after multiple failed attempts

4. **Audit Logging:**
   - Log all profile update attempts
   - Include IP address and timestamp

## Implementation Notes

These endpoints should be implemented in your backend server (likely in the existing admin routes). The frontend Admin Profile component is already configured to call these endpoints with the correct request format.