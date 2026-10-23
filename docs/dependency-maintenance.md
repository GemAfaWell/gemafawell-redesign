# Dependency maintenance

1. Merge this security/maintenance PR into the default branch.
2. Install the Mend Renovate GitHub App for this repository (repository admin approval may be required).
3. Review the Dependency Dashboard and dependency PRs regularly.

Renovate is configured to create dependency-update PRs, perform lockfile maintenance, and surface vulnerability updates. Major upgrades require dashboard approval; **automerge is disabled** for all updates. Configuration alone does not install or activate the GitHub App.

Before merging each update, require a successful Vercel preview build, applicable automated tests, and a review of critical user flows (forms, authentication, payments, media as applicable). A passing build is not proof of application correctness. Do not enable automerge until reliable required checks and branch protections are configured.

Retain the declared Yarn version and committed lockfile. Avoid mixing package managers, silently ignoring failed audits, or forcing incompatible transitive versions to obtain a clean audit.
