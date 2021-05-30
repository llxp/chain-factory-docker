conn = new Mongo();
db = connect(_getEnv('MONGODB_CONNECTION_URI'));
printjson(db.getCollectionNames());
const collections = db.getCollectionNames();
printjson(collections);
const collections_needed = {
  'idp_domain_config': [
    {
      created: ISODate(),
      updated: ISODate(),
      domain: 'ad.lan',
      idp_system_config: {
        login_endpoint: 'http://authentication-api:8000/api/login',
        user_information_endpoint: 'http://authentication-api:8000/api/get_user_groups',
        translate_users_endpoint: 'http://authentication-api:8000/api/translate_users'
      }
    }
  ],
  'role_config': [
    {
      "enabled": true,
      "created": ISODate(),
      "updated": ISODate(),
      "auth_config": [
        {
          "name": "CN=AccessPlatformAdmins,CN=Users,DC=ad,DC=lan",
          "auth_type": "AuthType.GROUP"
        }
      ],
      "role": "PLATFORM_ADMINISTRATOR",
      "domain": "ad.lan"
    },
    {
      "enabled": true,
      "created": ISODate(),
      "updated": ISODate(),
      "auth_config": [
        {
          "name": "CN=AccessScopeAdmins,CN=Users,DC=ad,DC=lan",
          "auth_type": "AuthType.GROUP"
        }
      ],
      "role": "SCOPE_ADMINISTRATOR",
      "domain": "ad.lan"
    },
    {
      "enabled": false,
      "created": ISODate(),
      "updated": ISODate(),
      "auth_config": [
        {
          "name": "CN=AccessUsers,CN=Users,DC=ad,DC=lan",
          "auth_type": "AuthType.GROUP"
        }
      ],
      "role": "USER",
      "domain": "ad.lan"
    }
  ]
};
for (const collection in collections_needed) {
  db.createCollection(collection);
  const collection_obj = db.getCollection(collection);
  for (const document of collections_needed[collection]) {
    collection_obj.insertOne(document);
  }
}
for (const collection of collections) {
  print(collection);
}