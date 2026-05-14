# Project Context

Read the entire project context located in the `invitation` folder.

---

# General Context

1. Read all the content inside the `concept` folder.
2. Inside the `concept` folder there is a file named:

```text
invitacion_digital_boda_mobile_react.jsx
```

Use this file as the functional base and reference implementation for the application structure, flow, and behaviors.

3. Inside the `concept/images` folder there are visual design references that represent the final desired UI/UX of the application.

   * The `.jsx` file represents the functional concept.
   * The images represent the final visual design and aesthetic direction.

4. Inside the `concept/templates` folder there is all the logic related to:

   * email services
   * templates
   * configuration
   * implementation examples

5. The EmailJS configuration is located in:

```text
email_service.js
```

6. The implementation examples are located in:

```text
service_implementation
```

Use these files as the base implementation for the email confirmation workflow.

---

# Project Objective

The purpose of this application is to create a premium digital wedding invitation system that allows guests to:

* View the wedding invitation experience
* Navigate through animated cinematic sections
* Confirm attendance (RSVP)
* Automatically receive an email confirmation
* Send RSVP notifications to the administrator/hosts

---

# Technical Requirements

## Animations

Use the following animation libraries:

* Framer Motion
* GSAP
* Lenis

The animations must feel:

* cinematic
* elegant
* smooth
* premium
* mobile-first

Implement:

* smooth scrolling
* reveal animations
* parallax effects
* transitions between sections
* animated countdown
* interactive motion effects

---

# Email System

Use EmailJS for:

1. Sending RSVP confirmation emails to guests
2. Sending RSVP notifications to the admin/hosts

The email flow must include:

```text
Guest submits RSVP
        │
        ▼
EmailJS
 ├── Admin notification email
 └── Guest confirmation email
```

The confirmation email sent to the guest must include:

* guest name
* attendance confirmation
* event date
* event location
* personalized message
* elegant closing message

---

# Architecture

Implement a scalable and maintainable architecture using:

* Clean Architecture principles
* Atomic Design methodology

The project must be modularized properly into:

* atoms
* molecules
* organisms
* templates
* pages
* services
* hooks
* animations
* utilities
* configuration

The structure must prioritize:

* scalability
* readability
* maintainability
* reusability

---

# Event Information

Use the following wedding event location:

```text
18.422462, -68.919175
La Romana, 22000
República Dominicana
```

Integrate:

* embedded map
* Google Maps redirection
* location section
* elegant location presentation

---

# Responsive Design

This invitation will be distributed exclusively for mobile devices.

Requirements:

* mobile-first design
* optimized for smartphones
* responsive layouts
* smooth performance on mobile
* touch-friendly interactions
* optimized typography and spacing
* cinematic vertical scrolling experience

Desktop compatibility is optional, but mobile experience must be prioritized.

---

# UI/UX Direction

The visual experience should feel:

* luxury
* elegant
* romantic
* cinematic
* immersive
* modern

Use:

* fullscreen sections
* video backgrounds
* soft transitions
* glassmorphism
* subtle motion
* premium typography
* dark cinematic palettes

The final result should resemble a luxury wedding landing page experience.
