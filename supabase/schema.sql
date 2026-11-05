create table if not exists public.leads (
 id uuid primary key,
 created_at timestamptz not null default now(),
 name text not null check (char_length(name) between 2 and 100),
 phone text not null,
 email text,
 service text not null,
 description text not null check (char_length(description) between 20 and 2000),
 consent boolean not null check (consent = true),
 consent_version text not null,
 status text not null default 'new' check (status in ('new','qualified','closed','archived'))
);
alter table public.leads enable row level security;
revoke all on public.leads from anon, authenticated;
-- No public policies: only the server service-role credential can insert/read.
-- Review and remove unneeded records under the owner's retention policy.
