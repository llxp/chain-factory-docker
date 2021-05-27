#!/bin/bash

current_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

$current_dir/services/backend_api/cleanup_build.sh
$current_dir/services/frontend_ui/cleanup_build.sh
$current_dir/services/worker_node/cleanup_build.sh
$current_dir/services/authentication_api/cleanup_build.sh