## Installation

Installation is not the easiest at the moment and is therefor aimed primarily at fellow developers with experience.

## Software and Technology

indrz is built on the shoulders of the following open source projects

Software      | License
------------- | -------------
PostgreSQL 9.3  | PostgreSQL License [similar to the BSD or MIT licenses.] (http://www.postgresql.org/about/licence/)
Postgis 2.1     | GNU General Public License [GPLv2] (http://choosealicense.com/licenses/gpl-2.0/)
pgRouting 2.0   | GNU General Public License [GPLv2] (http://choosealicense.com/licenses/gpl-2.0/)
python 3.x & 2.x    | PYTHON SOFTWARE FOUNDATION LICENSE VERSION 2
Django 1.8      | Django Software Foundation  a type BSD
GDAL            | [MIT] (http://choosealicense.com/licenses/mit/) 
Geoserver       | GNU General Public License (GPLv2), plus Apache 2.0
Openlayers 3.x  | 2-Clause BSD
jQuery          | [MIT] (http://choosealicense.com/licenses/mit/) 
Bootstrap       | MIT copyright 2015 Twitter



## Requirements

  1. PostgreSQL 9.3.x
  1. PostGIS 2.1.x
  1. pgRouting 2.x
  1. Python 3 recommended and 2.9 +
  1. Django 1.8 (web framework) + other Django Apps(see requirements.txt) [link to requirements](requirements.txt)

## Instructions

1. Install PostgreSQL 9.3, this I will leave up to you and some googleling
1. Install PostGIS Extension for your PostgreSQL install
1. Install PgRouting 2.x Extension for your PostgreSQL install
1. Create a database [follow these SQL scripts in order] (../../scripts/sql)
1. Install Python 2.7.x
1. Install Django 1.8
1. Install all other python repos with pip

Help is here check out the GIT repo and start [GIT how to fork indrz] (https://help.github.com/articles/fork-a-repo/)


## Windows users


Create a python virtual environment
Download pyscopg2 windows binary http://www.stickpeople.com/projects/python/win-psycopg/index.2.5.4.html

Create python virtual env

enter virtual env

```bash
C:\> C:\virtualenv\Scripts\activate.bat 
(virtualenv) C:\> easy_install psycopg2-2.5.4.win32-py2.7-pg9.3.5-release.exe
```
## Postgresql installation and setup

To create a working database for your indrz application you will need to run 
the following SQL to create a role, schemas, and extensions.

```sql
-- create a new user for your DB
CREATE ROLE indrz-pg LOGIN ENCRYPTED PASSWORD 'bigsecret'
   VALID UNTIL 'infinity';
   
-- create a new schema to store all your tables
CREATE SCHEMA django AUTHORIZATION indrz-pg;
CREATE SCHEMA geodata AUTHORIZATION indrz-pg;

-- set PostgreSQL search path to django so
-- when you install all your tables will
-- be created in the schema called django
-- this makes it easy to backup restore 

ALTER ROLE indrz SET search_path = django, geodata, public;

-- install postgis and pgrouting extensions
CREATE EXTENSION postgis;
CREATE EXTENSION pgrouting;
```



### Ubuntu or Linux Debian installs for Postgresql
 
```bash
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt trusty-pgdg main" >> /etc/apt/sources.list'
wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
```

### Install Postgresql 9.5, PostGIS

```bash
sudo apt-get install postgresql-9.5-postgis-2.2 pgadmin3 postgresql-contrib-9.5
```

### Install pgRouting 2.1 package 

```bash
sudo apt-get install postgresql-9.5-pgrouting
```

## Installation with Docker

this will be awesome...coming soon


## Get the indrz GIT repostiory Started


[GIT how to fork indrz] (https://help.github.com/articles/fork-a-repo/)



