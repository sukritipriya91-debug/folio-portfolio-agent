# Folio — conversational portfolio construction prototype

An independent concept prototype by Sukriti Priya. All accounts, models, allocations, and report content are fictional. This is not affiliated with Morgan Stanley.

## Open the prototype

Open `dist/index.html` in a modern browser. No installation, API key, or build is required. Keep the files together so report links work. An internet connection is used only for optional Google Fonts; system fonts provide an offline fallback.

For a local web preview, run `python3 -m http.server 4173 --directory dist` from this folder and open http://localhost:4173.

## Two-minute meeting demonstration

1. Select **Alex Morgan**, then **Guided Advisory**.
2. Choose **Compare overlap**. Explain that the prototype compares fictional asset-class weights, not individual holdings.
3. Select **Global Growth** to show a risk validation failure. The account and program stay selected.
4. Choose **Show compatible models**, then **Balanced Core**.
5. Generate all four reports. Open **Strategy Analysis** to show that the account, program, and model were carried forward without re-entry. Each report opens in a new tab and has a Print / Save as PDF option.
6. Back in the conversation, use the context panel's program **Change** button to select **Flexible Advisory**, then **Create custom model**.
7. Try weights totaling 110% to demonstrate validation, then use 50% equities, 45% fixed income, and 5% cash. Generate reports again to show the updated context revision.

## Supported journeys

- Two fictional accounts, with distinct balances and demo risk limits.
- Guided Advisory (curated models) and Flexible Advisory (curated or custom models).
- Model finder with risk filter, asset-class overlap comparison, favourites, exact model ID/name lookup, and custom allocation creation.
- Demo checks for program minimums, model/program compatibility, risk limits, and allocation totals.
- Strategy Analysis, Transition Analysis, Proposal, and Client Summary reports generated from an immutable snapshot of current selections.
- Change selections without re-entering unaffected inputs. Changing account clears program/model; changing program clears model. Changes invalidate prior validation. Existing reports remain labelled snapshots of their original revision.
- Typed shortcuts such as `Use Alex Morgan's account`, `Select Flexible Advisory`, `Use MOD-101`, `Compare overlap`, and `Generate all reports`.
- Responsive layout, keyboard-accessible forms, and optional WebMCP tools for reading context and selecting a demo account.

## What is simulated

This is a frontend prototype, not a production financial application. Responses are deterministic; no LLM or backend is connected. Validation runs in browser JavaScript and uses deliberately simplified rules. Custom model generation uses advisor-entered allocations, not investment recommendations. Reports are illustrative HTML documents, not official firm reports. The report snapshot is encoded in the URL fragment for portability; do not use real client data. No orders, account changes, or financial transactions occur.

State lasts only for the current page session. Refreshing or starting a new conversation clears it. No database, login, real clipboard read permission, or external financial data connection is included.

## Source files

- `dist/index.html`: conversation workspace.
- `dist/styles.css`: visual design and responsive layout.
- `dist/app.js`: demo catalogue, workflow state, validation, and conversational shortcuts.
- `dist/report.html`: report entry point.
- `dist/reports.js`: four report templates.
- `dist/report-view.js`: report snapshot parsing and rendering.

The `dist` folder can be hosted by any static website host. For GitHub Pages, place its contents in the Pages publishing folder or configure a workflow that publishes `dist`. GitHub repository: https://github.com/sukritipriya91-debug/folio-portfolio-agent

Live private demo: https://folio-conversation-sukriti.sukritipriya91.chatgpt.site
