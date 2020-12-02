# Prepare the Database

Do the following as root

```sql
create database etraveldb;
create user travelclient identified by 'pass';
use etraveldb;
grant all privileges on etraveldb to travelclient;
grant all privileges on etraveldb.* to travelclient;
```