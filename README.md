# INDRZ Documentation
This repository is where we (GOMOGI) write and host the INDRZ project documentation. 

Here is the documentation for the Frontend, Backend content and the static-site generator code [VuePress](https://vuepress.vuejs.org/) for the INDRZ documentation site. The project homepage  **[indrz](https://indrz.com)**

[![GitHub stars](https://img.shields.io/github/stars/indrz/indrz.svg?style=flat-square)](https://github.com/indrz/indrz/stargazers)
[![GitHub release](https://img.shields.io/github/release/indrz/indrz.svg)](https://github.com/indrz/indrz/releases)
[![license](https://img.shields.io/badge/license-AGPL-blue.svg?style=flat-square)](https://raw.githubusercontent.com/indrz/indrz/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/indrz/indrz.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)


**Project homepage [indrz](https://indrz.com)**, indrz enables you to serve indoor maps and provide shortest path routing to your users. (room to room, building to building, person to person)

**[indrz](https://indrz.com)** is composed of two parts hosted at [GITLAB](https://gitlab.com/indrz), mirrored to [Github](https://github.com/indrz), active on [GitLab indrz-frontend code](https://gitlab.com/indrz/indrz-frontend) and [indrz-backend code](https://gitlab.com/indrz/indrz-backend)
  - **[indrz-frontend code](https://gitlab.com/indrz/indrz-frontend)** is the frontend repository built with **Vue**, **Nuxt** and **Vuetify**
  - **[indrz-backend code](https://gitlab.com/indrz/indrz-backend)** is the backend repository serving the API built with **Django**, **Django Rest Framework**



## Backend Installation
--- NOTE work in progress--  



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
1. Frontend nodejs container to run the frontend **Vue**, Nuxt application
1. **Geoserver** container to serve your maps


### checkout indrz from github
```bash
git clone https://github.com/indrz/indrz-be.git indrz
cd indrz-be
```

### Load demo data (campus, building, space, poi)

```bash
pip install -r requirements.txt
python manage.py migrate --noinput
python manage.py loaddata initial_ltspacetype_data
python manage.py loaddata initial_poi_categories
python manage.py loaddata buildings
```


## Frontend Installation
--to-do-- 


## Build the documentation
Documentation is built with [VuePress](https://vuepress.vuejs.org/).

Start documentation site in development mode:

``yarn run dev``

### Build documentation:

``yarn run build``



## Components
**Backend**
* [Django](http://djangoproject.com) – Web Framework Backend
* [Django Rest Framework](http://www.django-rest-framework.org) – Django Rest Web Framework our API
* [PostGIS](http://postgis.net) – Spatial Database extension to Postgresql
* [PGRouting](http://pgrouting.org) - Routing extension to PostGIS and Posgresql
* [Postgresql](http://www.postgresql.org) – Database
* [Geoserver](http://geoserver.org) – Web map server to serve and create, maps and data
  
**Frontend**
* [Openlayers](http://openlayers.org) – Slippy client side javascript mapping library
* [Vue.js](https://vuejs.org) Vue.js frontend framework
* [Nuxt.js](https://nuxtjs.org) vue based frontend framework
* [Vuetify](https://vuetifyjs.com/) Vuetify Vue Material Design building blocks
* [Material Design](https://material.io/) - design


## Licence
indrz is under [LICENCE](/LICENSE) GNU General Public License v3.0.  The name "indrz" is a trademark and cannot be used without approval.

## Mantra
Find it fast

## What is indrz? the vision
To make indoor navigation as common as GPS car navigation.

indrz is open source software API to provide indoor maps and routing directions. 
 indrz will allow you to integrate indoor maps and routing services into your homepage or application.  
 If you work at a university or other organization and need an online wayfinder [indrz.com](https://indrz.com) 
 will offer our services to build or host it for you.  Our business model is like Mapbox, free open source software 
 and payed services such as data conversion, preparation or import.  The [indrz.com](https://indrz.com) cloud based 
 platform can host the solution for you.

Indrz was developed out of the need to quickly communicate
how to get from point A to point B in a complex set of buildings.
Being late for your first class is never a good thing, so
to help the students out indrz was born.

### Contact & community
Communication is simple via email ([office@gomogi.com](mailto:office@gomogi.com)). All other discussion should happen [relevant GitHub issues page](https://github.com/indrz/indrz-frontend/issues).

### Hey join us, get involved
indrz would love your help. There are more than enough things to get done so we would love your help.  We need people to help out submit bugs, suggest features, write documentation and contribute code.


## Supported and built by:

Contact: Michael Diener

Email: office@gomogi.com

[www.gomogi.com] (https://www.gomogi.com)

### What you GET
The code is for building the routing services, client side javascript to view routes, show maps, integrate maps, change floors, ...  All the functionality is baked in for your own indoor routing app or webpage.  

### What this is NOT
You do not get the data prepared for the system, data import, data conversion, platform installation, design and more.  These are all services provided by GOMOGI (maybe others in the future :) ) on the cloud platform here at (www.indrz.com) so to keep this all open source please contact us to keep things moving forward.

### What you need to DO and KNOW (the magic)
We can do this for you but if you know how you will need to know how to make the maps, import data, convert file formats such as DWG,JPG, PDF into maps or does it upload into a PostGIS database.  This is hard work and I am still looking for a quick magicical way to automagically import your indoor maps (simple images is easy and everyone can do that).  Finally you also need to build the indoor routing network.

###  What you need to DO
* import CAD, JPG, PDF,PNG... into PostGIS
* create maps (geoserver with sld) coming from your import Data
* create routes (QGIS or other Desktop GIS)
* create Client (indrz)
* create Services (indrz)
* customize Client, corporate identity
* deploy


### Where can you use it?
* universities
* hospitals
* business parks
* shopping malls
* expo halls
* events opera house, stadiums
* libraries
* any building anywhere
* meeting room finder
* digital wayfinding

## Features
* search people, places
* API connect to external data such as room booking systems vi API
* API to show or hide map components
* floor switcher to view floor plans per floor
* routing indoor 3d routes from any floor to any floor
* routing for diabled
* routing walk time
* routing distance
* routing logic such as route to front office first then to destination
* 3D view in google earth connected to 2d map
* Print maps
* share map, share route, share search results
* Points of interests: cafe, vending machines, bookstore you name it
* multilanguage to support any language
* mobile web page

## Translations
Translations are hosted by [Transifex here]  (https://www.transifex.com/organization/indrz/dashboard)
Currently we have translations for English and German, feel free to add your language.

### Current branches in use
* indrz Wirtschafts Universität Wien  indrz-campus (http://campus.wu.ac.at)
* indrz library [Vienna University of Economics and Business Administration Library](http://gis.wu.ac.at/?key=ST%20261.w34%20G744)
* indrz business park [Lakeside Science & Technology Park](http://ws1.gomogi.com/lakeside/Firmensuche.html)
* indrz Alpen Adria University Klagenfurt indzr-campus (http://campus-gis.aau.at)


## Contact & community
Communication is simple via email ([office@gomogi.com](mailto:office@gomogi.com)). All other discussion should happen in the [indrz Google Group](https://groups.google.com/forum/#!forum/indrz-dev),  or [relevant GitHub issues page](https://github.com/indrz/indrz/issues).

## Hey join us, get involved
indrz would love your help. There are more than enough things to get done so we would love your help.  We need people to help out submit bugs, suggest features, write documentation and contribute code.

Task | Skill 
--- | --- 
`write documentation` | anyone
`write translations` | multi-lingual
`submit bug report` | write detailed
`fix bugs` | git, coding
`add features` | git, coding
    



## Supporters
A big shout out to the following supporters for sharing the open source love

 - [**Browserstack**] (https://www.browserstack.com) for testing our mobile and desktop browser compatibility
 - [**Transifex**] (https://www.transifex.com/) for translations

## Design Decisions

Indrz is built for pure simplicity and quick information exchange.
A user visiting a site should quickly see their destination and
orient themselves.  Indrz is not designed as a virtual reality app
guiding you every step of the way but more like a quick reference.
You still will need to look around, but getting lost and walking
into pillars while staring at your phone should no longer happen.

## Research Areas

We are looking to expand our horizons

 * Auto generating indoor route descriptions based on points of interest and landmarks is an area in need of more research.
 * Semi-Automatic data conversion from DWG, DXF, PDF, JPG to PostGIS vector polygons, lines, and points.
 * Generation of polygon centerlines, skeletons
 * Complex topology rule checking

## Goals - Vision


We want to make sure every one can find there way with ease and make them aware of how wayfinding works teaching you at the same time how to find your way in any and every indoor environment.
