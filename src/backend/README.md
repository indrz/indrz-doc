# Backend documentation
--- NOTE work in progress--  

The main repository is located at Gitlab at this time.
link to [backend gitlab repo](https://gitlab.com/indrz/indrz-backend)

## Components
* [Django](http://djangoproject.com) – Web Framework Backend
* [Django Rest Framework](http://www.django-rest-framework.org) – Django Rest Web Framework our API
* [PostGIS](http://postgis.net) – Spatial Database extension to Postgresql
* [PGRouting](http://pgrouting.org) - Routing extension to PostGIS and Posgresql
* [Postgresql](http://www.postgresql.org) – Database



## Quick Start

```bash
git clone https://github.com/indrz/indrz-be.git indrz
cd indrz-be
```

### Docker and Docker-Compose
The prefrered quick start is using docker-compose. Simply enter the main directory where you cloned the repo and enter:

`docker-compose up -d`

It then creates the following:
1. **Postgresql** database instance with both **PostGIS** and **PgRouting** extensions
1. Python container to run the backend **Django** application
1. Frontend nodejs container to run the frontend **Vue**, **Nuxt** application
1. **Geoserver** container to serve your maps


### Load demo data (campus, building, space, poi)

```bash
pip install -r requirements.txt
python manage.py migrate --noinput
python manage.py loaddata initial_ltspacetype_data
python manage.py loaddata initial_poi_categories
python manage.py loaddata buildings
```


## Live indrz applications

| University    | Are           |
| ------------- |:-------------:|
| Alpen Adria University Klagenfurt      | [campusplan](https://tuwien.ac.at/maps) |
| Economic University of Vienna     |  [campusplan.aau.at](https://campusplan.aau.at)      |
| Technical University of Vienna |  [campus.wu.ac.at](https://campus.wu.ac.at)     |


### AutoCAD data integrations
Services that make this open source project possible 

::: tip
Get in touch with us to setup your in-bound data pipeline AutoCAD to INDRZ import
:::

