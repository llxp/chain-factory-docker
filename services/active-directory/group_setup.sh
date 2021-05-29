#!/bin/bash

samba-tool group add AccessPlatformAdmins
samba-tool group add AccessScopeAdmins
samba-tool group add AccessUsers

samba-tool group addmembers "AccessPlatformAdmins" Administrator
samba-tool group addmembers "AccessScopeAdmins" Administrator
samba-tool group addmembers "AccessUsers" Administrator
