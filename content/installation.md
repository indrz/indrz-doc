## Installation

Installation is not the easiest at the moment and is therefor aimed primarily at fellow developers with experience.

### Software and Technology

indrz is built on the shoulders of the following open source projects and should run on any OS such as Ubuntu, CentOS, Redhat

Software      | License
------------- | -------------
PostgreSQL 9.5  | PostgreSQL License [similar to the BSD or MIT licenses.] (http://www.postgresql.org/about/licence/)
Postgis 2.2     | GNU General Public License [GPLv2] (http://choosealicense.com/licenses/gpl-2.0/)
pgRouting 2.x   | GNU General Public License [GPLv2] (http://choosealicense.com/licenses/gpl-2.0/)
python 3.x & 2.x    | PYTHON SOFTWARE FOUNDATION LICENSE VERSION 2
Django 1.9      | Django Software Foundation  a type BSD
GDAL            | [MIT] (http://choosealicense.com/licenses/mit/) 
Geoserver       | GNU General Public License (GPLv2), plus Apache 2.0
Openlayers 3.x  | 2-Clause BSD
jQuery          | [MIT] (http://choosealicense.com/licenses/mit/) 
Bootstrap       | MIT copyright 2015 Twitter



### Requirements

  1. PostgreSQL 9.5.x
  1. PostGIS 2.2.x
  1. pgRouting 2.x
  1. Python 3.4 + recommended or Python 2.9 +
  1. Django 1.9 (web framework) + other Django Apps(see requirements.txt) [link to requirements](requirements.txt)
  1. Web Server such as Apache
  1. Geoserver to server your maps as WMS server, style your data (best with Tomcat)

### Instructions

The instructions that will follow are based on the OS  Ubuntu 14.04 LTS Linux 64bit server.  

1. Install PostgreSQL,PostGIS and pgRouting [instructions here osgeo] (https://trac.osgeo.org/postgis/wiki/UsersWikiPostGIS22UbuntuPGSQL95Apt)
1. Create a database [follow these SQL scripts in order] (../../scripts/sql)
1. Install Geoserver or some other map server to server your maps [http://docs.geoserver.org/latest/en/user/installation/index.html#installation]
1. Connect your Geoserver with your Postgresql DB
1. Install Python (only needed on Windows)
1. Install Django and all other python repos with pip and our requirements.txt

Help is here check out the GIT repo and start [GIT how to fork indrz] (https://help.github.com/articles/fork-a-repo/)


### Windows users


Create a python virtual environment
Download pyscopg2 windows binary http://www.stickpeople.com/projects/python/win-psycopg/index.2.5.4.html

Create python virtual env

enter virtual env

```bash
C:\> C:\virtualenv\Scripts\activate.bat 
(virtualenv) C:\> easy_install psycopg2-2.5.4.win32-py2.7-pg9.3.5-release.exe
```
### Postgresql installation and setup

```bash
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt trusty-pgdg main" >> /etc/apt/sources.list'
wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get install postgresql-9.5-postgis-2.2 pgadmin3 postgresql-contrib-9.5
# Install pgRouting 2.1 package 
sudo apt-get install postgresql-9.5-pgrouting

#create a new database called indrz
createdb -p 5432 -h localhost -E UTF8 -T template0 -e indrz
```

Now login
```bash
sudo -u postgres psql
```
Create extension Postgis

CREATE EXTENSION postgis;

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

### 2nd Modify standard pgRouting function for  3d pgRouting
This step is necessary to allow 3DDistance calculations for our routes that
travel over multiple buliding levels.  Please RUN this sql with copy paste in pgAdmin for example.
```sql
-- Function: public.pgr_pointtoid3d(geometry, double precision, text, integer)

-- DROP FUNCTION public.pgr_pointtoid3d(geometry, double precision, text, integer);

CREATE OR REPLACE FUNCTION public.pgr_pointtoid3d(point geometry, tolerance double precision, vertname text, srid integer)
  RETURNS bigint AS
$BODY$ 
DECLARE
    rec record; 
    pid bigint; 

BEGIN
    execute 'SELECT ST_3DDistance(the_geom,ST_GeomFromText(st_astext('||quote_literal(point::text)||'),'||srid||')) AS d, id, the_geom
        FROM '||pgr_quote_ident(vertname)||'
        WHERE ST_DWithin(the_geom, ST_GeomFromText(st_astext('||quote_literal(point::text)||'),'||srid||'),'|| tolerance||')
        ORDER BY d
        LIMIT 1' INTO rec ;
    IF rec.id is not null THEN
        pid := rec.id;
    ELSE
        execute 'INSERT INTO '||pgr_quote_ident(vertname)||' (the_geom) VALUES ('||quote_literal(point::text)||')';
        pid := lastval();
    END IF;

    RETURN pid;

END;
$BODY$
  LANGUAGE plpgsql VOLATILE STRICT
  COST 100;
ALTER FUNCTION public.pgr_pointtoid3d(geometry, double precision, text, integer)
  OWNER TO postgres;
COMMENT ON FUNCTION public.pgr_pointtoid3d(geometry, double precision, text, integer) IS 'args: point geometry,tolerance,verticesTable,srid - inserts the point into the vertices table using tolerance to determine if its an existing point and returns the id assigned to it';

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

### Installation with Docker

this will be awesome...coming soon


### Get the indrz GIT repostiory Started


[GIT how to fork indrz] (https://help.github.com/articles/fork-a-repo/)



