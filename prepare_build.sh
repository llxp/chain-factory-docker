#!/bin/bash

current_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

$current_dir/services/backend_api/prepare_build.sh
$current_dir/services/frontend_ui/prepare_build.sh
$current_dir/services/worker_node/prepare_build.sh
$current_dir/services/authentication_api/prepare_build.sh
