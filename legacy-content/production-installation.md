# Server Setup Instructions
The indrz application is a **Django Web Framework  WSGI**  web application.  This means that any **WSGI **capable server can server our site. [Django docs](https://docs.djangoproject.com/en/1.10/howto/deployment/wsgi/) include some guidance.  The [Django + uwsgi docs](https://docs.djangoproject.com/en/1.10/howto/deployment/wsgi/uwsgi/) are also available online.

# GIT
The source code is a GIT repository and for ease of update should be cloned onto the production server, so go ahead and [install GIT ](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your machine

    git clone https://github.com/indrz/indrz.git

# Python
 Our application is a Django application and there for requires Python 3.4.x and Django to be installed along with the other python requirements listed in the requirements.txt file.

## Install Python virtual env
This will create a python virtual environment to store the indrz application requirments, keeping the main Python packages separate from the application for better management. [install instructions python virtual env](https://virtualenv.pypa.io/en/stable/installation/)

    ...install python virtual env  instructions here 

## Install the required python modules into your newly created virtual env using the requirements.txt  file.

    pip install -f /opt/django-deploy/requirements.txt


Location of the python virtual env where all dependencies are installed:

    /opt/venvs/py3uwsgi

To start the virtual env `source /opt/venvs/py3uwsgi/bin/activate`


Test your installation

1.  Go to source code /opt/django-deploy/indrz
1. run `python manage.py runserver 8000` to start a local server and visit http://localhost:8000/ to see if page is running
1. `ctl - c` to kill service

## Deploy folder
These folders are the folders holding the code and static resources that are served up live on the site.  The original source code folder is located at /opt/indrz-src
These are the locations of the application for deployment:

    /opt/django-deploy/indrz       this folder is the main django application folder
    /opt/django-deploy/static      this is the static files dir that nginx will server
    /opt/django-deploy/media    this is where the uploaded content will be saved


## nginx
 [Install instructions here](http://nginx.org/en/linux_packages.html). Our webserver of choice, please follow your platform instructions you will find the conf file here:

    /etc/nginx/conf.d/indrz-ssl.conf


## uwsgi
 [ Installation instructions are here](http://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html). To server our Django WSGI application we need a wsgi compliant server to serve up our python application for NGINX to share with the world.  Other options include Apaches mod-wsgi, or green unicorn for example.

    /etc/uwsgi/sites/indrz-uwsgi.ini                    # uwsgi configuration datei
    /etc/uwsgi.ini
    /etc/ngnix/indrz_uwsgi.ini
    /etc/nginx/uwsgi_params
    /etc/systemd/system/uwsgi.service             # on server boot service to start with configuration
    /run/uwsgi/indrz.sock                                        # location of the socket file if used as suggested by the uwsgi documentation

    
The installation of uwsgi to server our DJANGO wsgi application to nginx. docs [uwsgi docs](http://uwsgi-docs.readthedocs.io/en/latest/WSGIquickstart.html?highlight=django)

System wide uwsgi installation as sudo user:  `pip3 install uwsgi`

Test install 

    cd /opt/django-deploy/indrz
    uwsgi --http :8000 --module indrz.wsgi

     uwsgi --socket localhost:8000 --chdir /opt/django-deploy/indrz/ --wsgi-file indrz/wsgi.py --master --processes 4 --threads 2


### uwsgi configuration

file in **/etc/uwsgi/sites/indrz-uwsig.ini**

    # mysite_uwsgi.ini file
    [uwsgi]
    http = localhost:8000
    # Django-related settings
    # the base directory (full path)
    chdir           = /opt/django-deploy/indrz
    # Django's wsgi file
    module          = indrz.wsgi
    # the virtualenv (full path)
    home            = /opt/venvs/py3uwsgi

    # process-related settings
    # master
    master          = true
    # maximum number of worker processes
    processes       = 10
    # the socket (use the full path to be safe
    # socket          = /opt/django-deploy/indrz/indrz.sock
    # ... with appropriate permissions - may be needed
    # chmod-socket    = 664
    # clear environment on exit
    # vacuum          = true


    #uid = mdiener
    #socket = /run/uwsgi/indrz.sock
    #chown-socket = mdiener:nginx
    #chmod-socket = 660
    #vacuum = true


Path to uwsgi service to start at BOOT

    /etc/systemd/system/uwsgi.service

File contents of **uwsgi.service**:

    [Unit]
    Description=uWSGI Emperor service
    
    [Service]
    ExecStartPre=/usr/bin/bash -c 'mkdir -p /run/uwsgi; chown someusername:nginx /run/uwsgi'
    ExecStart=/usr/bin/uwsgi --emperor /etc/uwsgi/sites
    Restart=always
    KillSignal=SIGQUIT
    Type=notify
    NotifyAccess=all
    
    [Install]
    WantedBy=multi-user.target

### Start uwsgi

Command to start the uwsgi service  `systemctl start uwsgi`


## Tomcat
[Install instructions ](https://tomcat.apache.org/tomcat-7.0-doc/appdev/installation.html)Tomcat 7 is needed to run our web map server Geoserver.   IF you want to run under HTTPS  please read the tomcat instructions on [ssl configuration](http://tomcat.apache.org/tomcat-7.0-doc/ssl-howto.html#Configuration)

    /usr/share/tomcat/
    /usr/share/tomcat/conf/server.xml

You will need to restart the tomcat service for any changes to take place.

    systemctl start tomcat
    systemctl reload tomcat
    systemctl stop tomcat  # to stop the service
    
    

## Geoserver
To server our maps we use Geoserver that will run under tomcat. Geoserver is a java application and can be[ downloaded as a WAR file ](http://geoserver.org/release/stable/)  Then all you need to to is extract the .war file into the TOMCAT folder of deployment and it will automatically extract itself and install.  You will need to enable a PORT so that the TILES being served are accessible from outside otherwise visitors to your site will not be able to see the map tiles.

## Postgresql 9.5
[Installation and download instructions are platform specific](https://www.postgresql.org/download/) Please see the official Postgresql documentation for details.

### PostGIS
To store our geospatial data used in routing and maps we use [PostGIS](http://postgis.net/install/) and extension to Postgresql so please install this before pgRouting and after Postgresql.

### pgRouting
Installation is again platform specific [Installation instructions](http://docs.pgrouting.org/latest/en/doc/src/installation/installation.html) and must be performed AFTER  PostGIS is installed. This is another extension to Postgresql to perform our routing queries 




### Links Resources
https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-centos-7
