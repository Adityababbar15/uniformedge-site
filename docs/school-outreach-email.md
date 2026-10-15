# School outreach email

Merge fields available from `gurugram-school-emails.csv`: `{{School}}`, `{{Locality}}`
(derive from the address column).

**Every claim below is verifiable.** No certifications, no named client schools, no
invented statistics — if a principal asks you to back something up, you can.

---

## Subject lines

Test two or three. Avoid anything that reads like a mailshot.

1. `Uniforms for {{School}}`
2. `{{School}} uniforms — taking the admin off your office`
3. `A question about {{School}}'s uniform supplier`
4. `Who handles uniforms at {{School}}?` — pairs with the redirect ask and works
   well on generic `info@` addresses

**Avoid:** "Best uniform manufacturer in Delhi!", anything with "Dear Sir/Madam"
in the subject, anything with an exclamation mark.

---

## Email 1 — the opener (FINAL)

> **Subject:** Uniforms for {{School}}
>
> Good morning,
>
> Most schools inherit their uniform supplier the way they inherit a photocopier
> contract — whoever was there first tends to stay.
>
> We manufacture school uniforms from our own facility in Delhi, on tailoring
> roots that go back to 1995. What usually interests schools most is what we take
> away rather than what we make.
>
> Once we're appointed, we deal with parents directly. They order their child's
> uniform from us and it is delivered to their home, with our team on WhatsApp if
> they need help with sizing or a replacement mid-term. We are also rolling out an
> online ordering page for each school we supply, so parents can order without
> having to call anyone.
>
> None of it routes through your office. {{School}} needs no uniform room, no
> distribution days, no cash desk and no stock cupboard — and no staff time lost
> to sizing queries in August.
>
> You keep control of what matters — colours matched to your actual palette rather
> than the nearest shade, your crest digitised properly rather than approximated,
> and physical samples approved before anything is cut.
>
> There's more on how it works here: https://www.uniformedge.co.in
>
> Would a short call be useful? Or if it's easier, tell me the one garment your
> parents complain about most and I'll send a sample of ours to compare.
>
> If uniforms sit with someone else at {{School}}, pass their name along or
> forward this on — either is a help.
>
> [NAME]
> UniformEdge
> +91 96433 99533 · info@uniformedge.co.in

**Why it is shaped this way**

- **Opens with their problem, not our credentials.** The photocopier line is
  from your own catalogue and it lands because it is true.
- **Leads with operational relief.** Every competitor opens with quality or
  price. Relief is the differentiated pitch and the one you actually deliver.
- **The ask is tiny.** "Send me the garment you get complaints about" is easier
  to say yes to than a meeting, and the reply tells you their pain point.
- **Under 200 words.** A principal reads this on a phone between classes.
- **The space/time/effort claim is framed around the school, not us.** See the
  warning below — this is the one paragraph that can get you into trouble.
- **The redirect ask sits at the close, not the open.** Most of these addresses
  are whatever the school registered with CBSE, so being pointed at the right
  person is the most likely useful outcome of a first send — and a forward from
  inside the school carries far more weight than a cold email. But it belongs at
  the end: opening a cold email with an apology concedes ground before you have
  said anything worth reading. Lead with their problem, ask for the handoff once
  you have earned the line.

---

## Two things this email gets wrong if you send it today

**1. The link goes nowhere yet.** `uniformedge.co.in` still resolves to registrar
parking, and the Vercel deployment is set to noindex. A principal who clicks and
lands on a parked page will not click a second time. **Point DNS before this
email goes out**, or remove the line.

**2. Do not say "everything is online".** There is no online store. Parents order
by WhatsApp, by phone, in store, or through the school — that is not e-commerce,
and a principal who repeats "it's all online" to parents who then have to visit a
shop will hold you to it.

What *is* true, and is what the paragraph above claims: the **school's**
involvement drops to nearly nothing. No uniform room, no distribution day, no
cash handling, no stock. That is a genuine saving of space, staff time and
effort — and it is defensible because it describes their side, not a capability
we have not built.

Say "we deal with parents directly, mostly remotely." Do not say "our business is
fully online."

---

## Claims in this email — what backs each one

| Claim | Status |
|---|---|
| Own facility in Delhi, since 1995 | Verified — company records |
| Parents order direct, not via the school | Verified — this is the model |
| Delivered to the parent's home | **Per client instruction. No charge or timeframe stated, deliberately** |
| WhatsApp for sizing help and replacements | Verified — support channel, not the checkout |
| Online ordering page "rolling out" | Forward-looking. `/shop` exists as a prototype and the site already says the parent portal is in development. Consistent — but do not upgrade this to "live" until it is |
| Colour matched, crest digitised, samples before cutting | Verified — catalogue |

**No delivery charge or timeframe appears anywhere**, at the client's instruction.
Do not add one to a reply without checking what is actually offered — a figure
given verbally in a first call is the one a school will hold you to.

WhatsApp is positioned as **ordering support**, not as the ordering mechanism.
That distinction matters: "message us to order" makes it sound manual, while
"we're on WhatsApp if you need help" reads as service on top of a real process.

---

## Email 2 — follow-up (send 6–8 days later, same thread)

> Dear Principal,
>
> Following up briefly in case this got buried.
>
> If you're already happy with your current supplier, do say and I'll leave it
> there. If there's a recurring annoyance — colours drifting between reorders,
> sizes running out mid-term, parents chasing the office — that's usually where
> we're worth a conversation.
>
> Happy to send samples either way.
>
> [NAME] · UniformEdge · +91 96433 99533

Giving them an easy way out raises reply rates and keeps you out of spam
complaints. **Do not send a third email.**

---

## Variant — when you have a nearby reference

Only once that school has agreed to be named.

> We already supply [SCHOOL], about [X] minutes from you — happy to put you in
> touch with them directly rather than have you take my word for it.

Strongest line available to you, and worth the permission conversation.

---

## Caveat on the recipient column — read this

**I could not verify which department any address belongs to, and I did not try
to make them procurement addresses.** They are whatever each school registered
with CBSE. The `likely_recipient` column is inferred from the text before the
`@` — `info@` is probably an office, `principal@` probably the head, a
firstname.lastname Gmail is probably a person who may no longer be there.

Confirming them properly would mean visiting 220 school websites, and most do not
publish a departmental address anyway. That is why the email closes by asking to be
redirected: it converts the uncertainty into a useful reply instead of a dead
send, without opening on the back foot.

---

## Who these addresses actually reach

The CSV has a `likely_recipient` column, inferred from the part before the `@`.
**It is a guess, not verified** — see the caveat below.

| Bucket | Count | How to treat it |
|---|---|---|
| Office / front desk | 55 | Best first batch. A shared mailbox someone is paid to read, and forwarding is normal |
| Principal / leadership | 37 | Goes straight to a decision-maker. Keep it short |
| Unclear | 70 | Send with the redirect ask doing the work |
| Looks personal | 58 | Send last. Highest chance of being a former staff member |

**Nobody here has a "procurement department."** These are schools, not hospitals
or corporates — uniform supplier choice is almost always a principal or
management decision. Optimising for a purchasing desk would aim at the wrong
person. The office mailbox and the principal are the two right targets, and both
are well represented.

---

## What to personalise beyond the merge field

Ninety seconds per email on the top 30 schools will outperform 200 generic sends.

- **Their locality** — "we already deliver in {{Locality}}"
- **Something from their site** — a house system, a recent event, their colours
- **Their board or size** if it shapes the uniform

---

## Sending rules

| | |
|---|---|
| Volume | **20–30/day maximum**, ramping up over two weeks |
| From | A dedicated address, not `info@`, so a reputation hit doesn't break your main inbox |
| Format | Plain text. No logo banners, no images, no tracking pixels |
| Timing | Tue–Thu, 10am–12pm. Avoid exam and admission season |
| Reply-to | A monitored inbox. A reply that sits three days is a lost lead |

Send in small batches from a warmed address. A cold domain blasting 200 emails
gets filtered, and then your quotes and invoices stop arriving too.

---

## Before sending

- [ ] Remove the 5 dead-domain rows flagged in the CSV
- [ ] Sort by `likely_recipient` and send buckets 2 and 3 first
- [ ] Decide who signs — the email needs a real name
- [ ] Confirm the reply inbox is monitored daily
- [ ] Send one to yourself first and read it on a phone
- [ ] **Confirm https://www.uniformedge.co.in actually loads the site** — the
      email links to it
