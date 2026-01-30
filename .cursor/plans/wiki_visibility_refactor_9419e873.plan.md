---
name: Wiki Visibility Refactor
overview: Rename `hidden_from_wiki` to `show_on_wiki` and `hidden_from_secret_wiki` to `show_on_secret_wiki` across the codebase, inverting the logic from negative (hidden) to positive (show) semantics.
todos:
  - id: logic-notes
    content: "Update notes.md: change `{% unless wiki_page.hidden_from_wiki %}` to `{% if wiki_page.show_on_wiki %}`"
    status: completed
  - id: logic-secret-notes
    content: "Update not_so_secret_notes.md: change `{% unless wiki_page.hidden_from_secret_wiki %}` to `{% if wiki_page.show_on_secret_wiki %}`"
    status: completed
  - id: logic-layout
    content: "Update _layouts/wiki_page.html: invert the redirect condition logic"
    status: completed
  - id: script-create-wiki
    content: "Update _wiki/create_wiki_page.sh: rename variables and invert defaults"
    status: completed
  - id: script-create-dict
    content: "Update _wiki/create_dictionary_page.sh: rename variables and invert values"
    status: completed
  - id: frontmatter-all
    content: Update frontmatter in all 20 wiki markdown files (rename variables, invert boolean values)
    status: completed
  - id: docs-optional
    content: Update CODEBASE_INDEX.md and README.md documentation references (optional)
    status: completed
isProject: false
---

# Wiki Visibility Variable Refactor

## Summary

Rename the wiki visibility variables from negative semantics (`hidden_from_*`) to positive semantics (`show_on_*`):

- `hidden_from_wiki` → `show_on_wiki`
- `hidden_from_secret_wiki` → `show_on_secret_wiki`

This requires updating template logic in 3 files, shell scripts in 2 files, and frontmatter in 20 markdown files.

---

## Logic Files to Update

### 1. [notes.md](notes.md) (Main Wiki Index)

**Current logic (line 15):**

```liquid
{% unless wiki_page.hidden_from_wiki %}
```

**New logic:**

```liquid
{% if wiki_page.show_on_wiki %}
```

Also update the closing tag from `{% endunless %}` to `{% endif %}` (line 45).

---

### 2. [not_so_secret_notes.md](not_so_secret_notes.md) (Secret Wiki Index)

**Current logic (line 15):**

```liquid
{% unless wiki_page.hidden_from_secret_wiki %}
```

**New logic:**

```liquid
{% if wiki_page.show_on_secret_wiki %}
```

Also update the closing tag from `{% endunless %}` to `{% endif %}` (line 45).

---

### 3. [_layouts/wiki_page.html](_layouts/wiki_page.html) (URL Redirect Logic)

**Current logic (lines 6-7, 12):**

```liquid
hidden_from_wiki and hidden_from_secret_wiki and then redirects to the right URL.
...
{% if page.hidden_from_wiki == true and page.hidden_from_secret_wiki == false %}
```

**New logic:**

```liquid
show_on_wiki and show_on_secret_wiki and then redirects to the right URL.
...
{% if page.show_on_wiki == false and page.show_on_secret_wiki == true %}
```

---

## Shell Scripts to Update

### 4. [_wiki/create_wiki_page.sh](_wiki/create_wiki_page.sh)

**Current logic (lines 23-29):**

```bash
if [ "$is_secret_note" = "y" ]; then
  hidden_from_wiki="true"
  hidden_from_secret_wiki="false"
else
  hidden_from_wiki="false"
  hidden_from_secret_wiki="true"
fi
```

**New logic:**

```bash
if [ "$is_secret_note" = "y" ]; then
  show_on_wiki="false"
  show_on_secret_wiki="true"
else
  show_on_wiki="true"
  show_on_secret_wiki="false"
fi
```

Also update the heredoc (lines 39-40) to use `show_on_wiki` and `show_on_secret_wiki`.

---

### 5. [_wiki/create_dictionary_page.sh](_wiki/create_dictionary_page.sh)

**Current (lines 29-30):**

```bash
hidden_from_wiki: true
hidden_from_secret_wiki: false
```

**New:**

```bash
show_on_wiki: false
show_on_secret_wiki: true
```

---

## Markdown Files Frontmatter Updates

All 20 files in `_wiki/` need their frontmatter updated. The transformation rule:

- `hidden_from_wiki: true` → `show_on_wiki: false`
- `hidden_from_wiki: false` → `show_on_wiki: true`
- `hidden_from_secret_wiki: true` → `show_on_secret_wiki: false`
- `hidden_from_secret_wiki: false` → `show_on_secret_wiki: true`

### Files with `hidden_from_wiki: true` (14 files) → `show_on_wiki: false`

- [_wiki/TEMPLATE.md](_wiki/TEMPLATE.md)
- [_wiki/favorite_quotes.md](_wiki/favorite_quotes.md)
- [_wiki/curious_research_questions.md](_wiki/curious_research_questions.md)
- [_wiki/second_law_of_thermodynamics.md](_wiki/second_law_of_thermodynamics.md)
- [_wiki/my_philosophy.md](_wiki/my_philosophy.md)
- [_wiki/irreducible_uncertainty.md](_wiki/irreducible_uncertainty.md)
- [_wiki/min_free_potential_energy.md](_wiki/min_free_potential_energy.md)
- [_wiki/will_data_solve_robotics.md](_wiki/will_data_solve_robotics.md)
- [_wiki/How_to_Frame_Your_Relationship_with_LLMs_and_VLMs.md](_wiki/How_to_Frame_Your_Relationship_with_LLMs_and_VLMs.md)
- [_wiki/conformal_vs_pac_methods.md](_wiki/conformal_vs_pac_methods.md)
- [_wiki/fundamental-ai-concepts.md](_wiki/fundamental-ai-concepts.md)
- [_wiki/control_as_inference.md](_wiki/control_as_inference.md)
- [_wiki/structured_inference_over_constraints.md](_wiki/structured_inference_over_constraints.md)
- [_wiki/the_big_picture_of_control_theory.md](_wiki/the_big_picture_of_control_theory.md)

### Files with `hidden_from_wiki: false` (6 files) → `show_on_wiki: true`

- [_wiki/meditations.md](_wiki/meditations.md)
- [_wiki/quotes.md](_wiki/quotes.md)
- [_wiki/the_problem_with_math_education.md](_wiki/the_problem_with_math_education.md)
- [_wiki/frequentist_vs_bayesian_smc.md](_wiki/frequentist_vs_bayesian_smc.md)
- [_wiki/P2P_offline_mesh_chat.md](_wiki/P2P_offline_mesh_chat.md)
- [_wiki/nn-discovering-computational-reductions.md](_wiki/nn-discovering-computational-reductions.md)

### Files with `hidden_from_secret_wiki: true` (9 files) → `show_on_secret_wiki: false`

- [_wiki/TEMPLATE.md](_wiki/TEMPLATE.md)
- [_wiki/meditations.md](_wiki/meditations.md)
- [_wiki/quotes.md](_wiki/quotes.md)
- [_wiki/the_problem_with_math_education.md](_wiki/the_problem_with_math_education.md)
- [_wiki/frequentist_vs_bayesian_smc.md](_wiki/frequentist_vs_bayesian_smc.md)
- [_wiki/P2P_offline_mesh_chat.md](_wiki/P2P_offline_mesh_chat.md)
- [_wiki/will_data_solve_robotics.md](_wiki/will_data_solve_robotics.md)
- [_wiki/control_as_inference.md](_wiki/control_as_inference.md)
- [_wiki/nn-discovering-computational-reductions.md](_wiki/nn-discovering-computational-reductions.md)

### Files with `hidden_from_secret_wiki: false` (11 files) → `show_on_secret_wiki: true`

- [_wiki/favorite_quotes.md](_wiki/favorite_quotes.md)
- [_wiki/curious_research_questions.md](_wiki/curious_research_questions.md)
- [_wiki/second_law_of_thermodynamics.md](_wiki/second_law_of_thermodynamics.md)
- [_wiki/my_philosophy.md](_wiki/my_philosophy.md)
- [_wiki/irreducible_uncertainty.md](_wiki/irreducible_uncertainty.md)
- [_wiki/min_free_potential_energy.md](_wiki/min_free_potential_energy.md)
- [_wiki/How_to_Frame_Your_Relationship_with_LLMs_and_VLMs.md](_wiki/How_to_Frame_Your_Relationship_with_LLMs_and_VLMs.md)
- [_wiki/conformal_vs_pac_methods.md](_wiki/conformal_vs_pac_methods.md)
- [_wiki/structured_inference_over_constraints.md](_wiki/structured_inference_over_constraints.md)
- [_wiki/the_big_picture_of_control_theory.md](_wiki/the_big_picture_of_control_theory.md)
- [_wiki/create_dictionary_page.sh](_wiki/create_dictionary_page.sh) (heredoc template)

---

## Files Without Frontmatter (No Changes Needed)

- `_wiki/YEAR_1.md` - No frontmatter
- `_wiki/boltzmann_gibbs_distribution.md` - No frontmatter

---

## Documentation to Update (Optional)

The following files reference these variables in documentation but are not functional:

- [CODEBASE_INDEX.md](CODEBASE_INDEX.md) - Update documentation references
- [README.md](README.md) - Update example frontmatter

---

## Verification

After changes, test by running `./start.sh` locally and verifying:

1. Pages with `show_on_wiki: true` appear on the main wiki at `/`
2. Pages with `show_on_secret_wiki: true` appear on `/not-so-secret-notes`
3. URL redirects work correctly for secret wiki pages

