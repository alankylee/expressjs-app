$body = @{name='me'}

# Get
Invoke-WebRequest -Uri 'http://localhost:5000/users/1'

# Get All
Invoke-WebRequest -Uri 'http://localhost:5000/users'

# Add
Invoke-RestMethod -Method POST -body ($body | ConvertTo-Json) -Uri 'http://localhost:5000/users/add' -ContentType 'application/json'

# Update
Invoke-RestMethod -Method PUT -body ($body | ConvertTo-Json) -Uri 'http://localhost:5000/users/update/1' -ContentType 'application/json'

# Delete
Invoke-RestMethod -Method DELETE -Uri 'http://localhost:5000/users/23'