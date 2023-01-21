import os
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.backends import default_backend
from cryptography.fernet import Fernet

# Set directory path to be encrypted
dir_path = '/path/to/files'

# Get all file paths in directory
file_paths = [os.path.join(dir_path, file) for file in os.listdir(dir_path)]

# Get password from user input
password = input("Enter password to encrypt files: ")

# Create key from password
salt = b'\xba\xda\x55\xec\xea\xf0\x48\x43\x9d\x7f\x3e\x7c\x3f\x7c\x8a\x7c'
kdf = PBKDF2HMAC(
    algorithm=hashes.SHA256,
    length=32,
    salt=salt,
    iterations=100000,
    backend=default_backend()
)
key = base64.urlsafe_b64encode(kdf.derive(password))

# Encrypt all files in directory
for file_path in file_paths:
    with open(file_path, 'rb') as f:
        data = f.read()
    fernet = Fernet(key)
    encrypted_data = fernet.encrypt(data)
    with open(file_path, 'wb') as f:
        f.write(encrypted_data)

print("All files in directory successfully encrypted.")
