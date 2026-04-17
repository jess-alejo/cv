---
title: "Rails enum with _prefix: true avoids method name collisions"
date: 2025-04-17
tags: ["ruby", "rails"]
source: "https://api.rubyonrails.org/classes/ActiveRecord/Enum.html"
---

When two models both define a `status` enum, the generated scope methods like `.active` or `.archived` can collide or cause confusion across models.

Adding `_prefix: true` scopes the generated methods to the enum name:

```ruby
enum :status, { active: 0, archived: 1 }, _prefix: true
```

This generates `order_active`, `order_archived` scopes instead of just `active` / `archived`, making intent clear and avoiding conflicts.
