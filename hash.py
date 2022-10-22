import hashlib

ulaz = 'primer....'

hash = hashlib.sha256(ulaz.encode('utf-8')).hexdigest()

print(hash)