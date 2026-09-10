# Claymore Valeting Website

A multi-page responsive website adaptation for a vehicle-valeting business.
The project demonstrates practical front-end customisation across service,
pricing, gallery, FAQ, booking, and contact pages.

## Run locally

The site is static and has no build step:

```sh
cd cardinal
python -m http.server 8000
```

Open `http://localhost:8000`.

## Project structure

- `cardinal/*.html` — page templates and business content
- `cardinal/css/` — Bootstrap-era theme and responsive overrides
- `cardinal/js/` — navigation, carousel, gallery, and interaction scripts
- `cardinal/images/` — site imagery and brand assets

## Portfolio scope

This repository is a customised front-end implementation derived from a
commercial Cardinal car-wash HTML template. Original design-source files,
vendor documentation, and the downloadable template archive are intentionally
excluded from the public repository. The project should be presented as a
template adaptation, not as an entirely original visual system.

The old demonstration PHP mail handlers were also removed. They used a bundled
third-party recipient and were not suitable for public deployment. Contact and
comment forms now display an explicit demo-only message instead of pretending
to submit data. A production deployment should use a maintained form service or
an authenticated server endpoint with validation, abuse controls, and secure
configuration.

## Third-party assets

The site includes Bootstrap, jQuery, Font Awesome, Revolution Slider, and other
front-end plugins distributed with the original template. Review the relevant
licences and your template licence before redistributing or deploying the site.
