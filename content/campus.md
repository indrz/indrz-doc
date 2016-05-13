## indrz Campus API

Welcome to the campus API. You can use this API to play
with the campus data.

### List Campus's

Lists all campuses for a particular campus.

```endpoint
GET /api/v1/campus/{organisation_name} campus:read
```

#### Example request

```curl
$ curl https://www.indrz.com/api/v1/campus/{organisation_name}
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

### Create Campus

Creates a new, empty campus.

```endpoint
POST /api/v1/campus/{organisation_id}
```

#### Example request

```curl
curl -X POST https://www.indrz.com/api/v1/{username}
```



#### Example request body

```json
{
  "name": "FancyCampusName",
  "organization": 12345
  "description": "wheehoowee description"
}
```

Property | Description
---|---
`name` | the name of the campus
`organization` |  the integer id of the organization the campus belongs too
`description` | (optional) a description of the campus

#### Example response

```json
{
  "owner": "{username}",
  "id": "{campus_id}",
  "name": "AGreatNameCampus",
  "description": "super description text",
  "created": "{timestamp}",
  "modified": "{timestamp}"
}
```


### Retrieve a single campus

Retrieves a single campus information.

```endpoint
GET /api/v1/campus/{campus_id}
```

#### Example request

```curl
curl https://www.indrz.com/api/v1/campus/{campus_id}
```


#### Example response

```json
{
  "id": "{campus_id}",
  "organization": {organization_id},
  "properties": {
    "name": "campus name",
    "description": "some super description"
    ...
  }
}
```

### Delete a Campus

Removes a campus from an organization.  This has a very BIG cascading effect
as it will DELETE all Buildings and all Spaces associated with this campus!
WARNING!!!

```endpoint
DELETE /api/v1/campus/{campus_id}
```

#### Example request

```javascript
client.deletecampus('campus-id', 'building-id', function(err, space) {
  if (!err) console.log('deleted!');
});
```

```curl
curl -X DELETE https://www.indrz.com/api/v1/campus/{campus_id}
```


#### Example response

> HTTP 204
