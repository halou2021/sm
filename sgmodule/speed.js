#!name=网络速率
#!desc=默认 1MB

[Script]
# Panel
network-speed-panel = type=generic,timeout=60,script-path=https://raw.githubusercontent.com/xream/scripts/main/surge/modules/network-speed/index.js,argument=icon=arrow.down.circle&icon-color=#5d84f8&mb=1

[Panel]
network-speed-panel = script-name=network-speed-panel,update-interval=-1
