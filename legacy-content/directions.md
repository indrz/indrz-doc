## indrz Directions API

Welcome to the indoor directions/ routing API. You can use this API to request indoor routes / directions across campuses and buildings indoors and outdoors.  This API offers multi-level navigation connecting indivdual building levels through cooridors such as stairs, elevators, escalators or ramps.  Route types are available such as barrierer free for wheelchair access.

### Retrieve directions using only coordinates and a floor number
here is the regular expression
url(r'^directions/(?P<start_coord>[-]?\d+\.?\d+,\d+\.\d+),(?P<start_floor>[-]?\d+)&(?P<end_coord>[-]?\d+\.?\d+,\d+\.\d+),(?P<end_floor>[-]?\d+)&(?P<route_type>[0-9])/$'

Returns a single route between two point coordinates.

```endpoint
GET /api/v1/directions/{start_coord},{start_floor}&{end_coord},{end_floor}&{route_type}
```

Retrieve route coordinate in a request

#### Example request

```curl
curl https://www.indrz.com/api/v1/directions/{start_coord},{start_floor}&{end_coord},{end_floor}&{route_type}
```

#### Example response

```json
{
....
}
```


### Retrieve directions based on space ids and a floor number
Passing around coordinates is fun but space_id s  is better. Simpler to use you
pass in the space_id of the room where the route will start and the space_id
of the room where the route will end.

 url(r'^directions/(?P<start_room_key>\d{5})&(?P<end_room_key>\d{5})&(?P<route_type>[0-9])/$', 'route_room_to_room', name='route-room-to-room')


```endpoint
GET /api/v1/directions/{start_space_id}&{end_space_id}&{route_type}
```

Retrieve your route with the space_id.

#### Example request

```curl
curl https://www.indrz.com/api/v1/space/{start_space_id}&{end_space_id}&{route_type}
```

#### Example response

```json
{
...
   }
```


### Force a route request through a mid-point such as a front office

url(r'^directions/force_mid/', 'force_route_mid_point', name='force-route-midpoint')

### Retrieve directions based on space ids
Passing around coordinates is fun but

url(r'^directions/(?P<building_id>buildingid=\d{1,5})&(?P<start_room_id>startid=\d{1,5})&(?P<end_room_id>endid=\d{1,5})(?P<route_type>&type=\d{1,5})?/$',
    'create_route_from_id', name='routing-from-id'),
    
url(r'^directions/(?P<building_id>buildingid=\d{1,5})&(?P<start_term>startid=.+)&(?P<end_term>endid=.+)(?P<route_type>&type=\d{1,5})?/$',    'create_route_from_search', name='routing-from-search'),




