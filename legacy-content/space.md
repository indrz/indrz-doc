## indrz Spaces API

This is our spaces API. You can use this API to request
and remove different spaces within a building.  This 
is used in combination with the "campus" and "buildings"
API, so be sure to check out those docs too.

### List Spaces

Lists all spaces for a particular building.

```endpoint
GET /api/v1/space/{building_id} building:read
```

#### Example request

```curl
$ curl https://www.indrz.com/api/v1/space/
```


#### Example response

```json
[
  {
    "owner": "{username}",
    "id": "{building_id}",
    "created": "{timestamp}",
    "modified": "{timestamp}"
  },
  {
    "owner": "{username}",
    "id": "{building_id}",
    "created": "{timestamp}",
    "modified": "{timestamp}"
  }
]
```
