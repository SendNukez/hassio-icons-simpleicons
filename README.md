[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/SendNukez/icons-simpleicons)](https://github.com/SendNukez/icons-simpleicons/releases)
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]
![GitHub file size in bytes](https://img.shields.io/github/size/SendNukez/icons-simpleicons/dist/icons-simpleicons.js?label=plugin%20size)

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

# [Simpleicons](https://simpleicons.org/) for Home Assistant

## Installation

### HACS (Recommended):
- Open HACS (installation instructions are [here](https://hacs.xyz/docs/installation/installation/)).
- Go to the "Frontend" section
- Add this repo as custom repository. To do this:
  - Click the three dots (`⋮`) top right > `Custom repositories`
  - Paste `https://github.com/SendNukez/icons-simpleicons` as Repository
  - Set Category to `Frontend`
  - Click `Add`
  - Close the popup
- Click the `+` button bottom right
- Search for "Simpleicons" and install it.

### Manual:
- Copy `dist/icons-simpleicons.js` into your `config/www` folder.
- Go to Configuration > Lovelace Dashboards > Resources > Add Resource
- Set url to `/local/icons-simpleicons.js` and Resource Type to `Javascript Module`.
- Add the following to your configuration.yaml, save and restart HA.
  ```yaml
  frontend:
  extra_module_url:
    - /local/icons-simpleicons.js
  ```