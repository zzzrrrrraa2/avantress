/* ==========================================================================
   Aventress Ltd — one-pager behaviour
   - EN/PL switch. English lives in the markup (default, and what crawlers see);
     Polish lives in the dictionary below.
   - mobile nav, sticky header state, scroll reveal, contact form stub
   ========================================================================== */

/* --------------------------------------------------------------------------
   Polish dictionary. Keys match data-i18n / data-i18n-ph attributes in
   index.html. English needs no entries — it is read from the markup on load.
   Copy marked [Placeholder] is intentional — final wording to come from client.
   -------------------------------------------------------------------------- */
const PL_DICT = {
  'skip': 'Przejdź do treści',

  'nav.fit': 'Czy to Ty',
  'nav.how': 'Jak to działa',
  'nav.services': 'Co obejmuje',
  'nav.why': 'Porównanie',
  'nav.about': 'O mnie',
  'nav.faq': 'FAQ',
  'nav.contact': 'Kontakt',
  'nav.cta': 'Napisz do mnie',
  'compare.alternative': 'Alternatywa',
  'compare.limit': 'Typowe ograniczenie',
  'compare.difference': 'Różnica Aventress',

  'hero.eyebrow': 'Stała obsługa administracyjna i back office · Londyn',
  'hero.h1a': 'Ty prowadzisz firmę.',
  'hero.h1b': 'Ja prowadzę papiery.',
  'hero.lede': '[Placeholder — 2 zdania: dla kogo dokładnie. Spółki LTD w UK zatrudniające 2–20 osób, które mają już księgowego, ale nie mają nikogo od bieżącej administracji. Wymień branże — budowlanka, kliniki, firmy rodzinne.]',
  'proof.ph': 'zdjęcie',
  'proof.1.q': '„[Placeholder — jedna linia, jeden efekt. Co przestało się dziać, odkąd przejęła to ona.]"',
  'proof.1.n': '[Imię] · [Firma, branża]',
  'proof.2.q': '„[Placeholder — jedna linia z innej branży. Liczba działa lepiej niż przymiotnik.]"',
  'proof.2.n': '[Imię] · [Firma, branża]',
  'hero.cta': 'Porozmawiajmy — 20 minut',
  'newspaper.hero.cta': 'Porozmawiajmy',
  'hero.ctaSub': 'Bez przygotowania i bez zobowiązań. Zwykła rozmowa o tym, co ląduje na Twoim biurku.',
  'hero.photo': '[Zdjęcie — portret, kadr pionowy 4:5, naturalne światło, bez stocku]',
  'hero.photoCap': '[Imię Nazwisko] — Aventress Ltd, Londyn',
  'hero.signature': '[Podpis — podpisz się czarnym tuszem na białej kartce, zeskanuj lub sfotografuj, zapisz jako PNG z przezroczystym tłem w assets/signature.png]',

  'trust.1': '10+ lat w administracji firm w UK',
  'trust.2': 'Pracuję obok Twojego księgowego',
  'trust.3': 'Po polsku i po angielsku',
  'trust.4': 'Odpowiedź w [czas reakcji]',

  'fit.eyebrow': 'Czy to Ty?',
  'fit.h2': 'Decyzja o oddaniu papierów już zapadła. Pytanie brzmi: komu.',
  'fit.intro': '[Placeholder — jedno zdanie: to cztery sytuacje, w których klienci najczęściej się odzywają. Dodaj, że krótka rozmowa służy ustaleniu, która z nich pasuje.]',
  'fit.1.h': '„Księgowy składa deklaracje. Całej reszty nie robi nikt."',
  'fit.1.p': '[Placeholder — jedna linia: co przejmuję w takim przypadku i że współpracuję bezpośrednio z księgowym, więc nic nie dubluje się.]',
  'fit.2.h': '„Na etat office managera pracy za mało — na mnie za dużo."',
  'fit.2.p': '[Placeholder — jedna linia: typowy zakres przy firmie tej wielkości i ile godzin miesięcznie to zdejmuje.]',
  'fit.3.h': '„Próbowałem wirtualnej asystentki. Musiałem tłumaczyć, czym jest Confirmation Statement."',
  'fit.3.p': '[Placeholder — jedna linia: różnicą jest znajomość compliance w UK — bez okresu wdrożenia i bez nadzoru.]',
  'fit.4.h': '„Urośliśmy do ośmiu osób i nic nie jest spisane."',
  'fit.4.p': '[Placeholder — jedna linia: onboarding, dokumentacja pracownicza i spisane procedury, żeby firma nie trzymała się na czyjejś pamięci.]',
  'fit.foot': '[Placeholder — jedno zdanie domykające: jeśli co najmniej dwa punkty brzmią znajomo, krótka rozmowa najszybciej pokaże, czy to dobre dopasowanie — i powiem wprost, jeśli nie jest.]',

  'sector.1': 'Budowlanka i rzemiosło',
  'sector.2': 'Kliniki i gabinety',
  'sector.3': 'Firmy rodzinne',
  'sector.4': 'Usługi profesjonalne',

  'flow.cap': 'Którędy chodzą papiery',
  'flow.1': 'Twoja firma',
  'flow.1s': 'poczta, faktury, paragony',
  'flow.2': 'Aventress',
  'flow.2s': 'posortowane, sprawdzone, pilnowane',
  'flow.3': 'Twój księgowy',
  'flow.3s': 'komplet dokumentów, na czas',
  'flow.4': 'HMRC · Companies House',
  'flow.4s': 'składa Twój księgowy',
  'flow.note': '[Placeholder — jedna linia pod schematem: nic nie wraca do Ciebie dwa razy i nic nie trafia do urzędu z pominięciem księgowego.]',

  'how.eyebrow': 'Jak to działa',
  'how.h2': 'Przejęcie zajmuje [ile czasu]. Potem działa w tle.',
  'how.lede': '[Placeholder — 1–2 zdania: co konkretnie trzeba zrobić na start i ile to zajmuje czasu po stronie klienta. Bądź konkretna.]',
  'how.1.num': 'Krok 01 · [kiedy]',
  'how.2.num': 'Krok 02 · [kiedy]',
  'how.3.num': 'Krok 03 · co miesiąc',
  'how.1.h': 'Krótka rozmowa, potem zakres na piśmie',
  'how.1.p': '[Placeholder — 20 minut przez telefon, bez przygotowania. Napisz, co wysyłasz po rozmowie i w jakim czasie — wstaw własny termin.]',
  'how.1.fine': 'Co wchodzi w zakres, co zostaje u księgowego i jak wygląda współpraca.',
  'how.2.h': 'Przejmuję administrację',
  'how.2.p': '[Placeholder — co obejmuje przejęcie: dostępy, struktura dokumentów, kalendarz terminów, kontakt z księgowym. Napisz, ile czasu to zajmuje klientowi — jedno spotkanie, nie projekt.]',
  'how.2.fine': 'Terminy Companies House i HMRC rozpisane, dokumenty uporządkowane, korespondencja przekierowana.',
  'how.3.h': 'Działa, a Ty dostajesz podsumowanie',
  'how.3.p': '[Placeholder — co ląduje w skrzynce co miesiąc i co wymaga decyzji. Podkreśl, że nic nie trzeba przypominać ani dopytywać.]',
  'how.3.fine': 'Zrobione, nadchodzące i to, co wymaga Twojego podpisu lub decyzji — na jednej stronie.',

  'promise.label': 'Współpraca',
  'promise.h': 'Jedna osoba, jedna skrzynka, [Twój czas reakcji]',
  'promise.p': '[Placeholder — bez opiekunów klienta, bez przekazywania sprawy między pracownikami, bez systemu zgłoszeń. Podaj czas odpowiedzi, który utrzymasz w każdym tygodniu, nie w najlepszym — to domyka decyzję.]',

  'svc.eyebrow': 'Co obejmuje',
  'svc.h2': 'Co dokładnie przejmuję — i co zostaje u Twojego księgowego',
  'svc.lede': '[Placeholder — 1–2 zdania: zakres ustalany indywidualnie, większość klientów bierze wszystkie trzy obszary, można zacząć od jednego. Zaznacz, że to pełna lista, nie zajawka.]',
  'svc.1.h': 'Terminy i zgodność',
  'svc.1.p': '[Placeholder — efekt w jednej linii: żaden termin nie jest zaskoczeniem, żadnych listów z karą. Napisz, dla kogo ma to największe znaczenie.]',
  'svc.1.l1': 'monitorowanie terminów HMRC i Companies House',
  'svc.1.l2': 'Confirmation Statement (CS01) — dane przygotowane i sprawdzone',
  'svc.1.l3': 'korespondencja i kontakt z HMRC oraz Companies House',
  'svc.1.l4': 'dokumentacja spółki prowadzona na bieżąco',
  'svc.2.h': 'Administracja finansowa i kontakt z księgowym',
  'svc.2.p': '[Placeholder — efekt w jednej linii: księgowy dostaje komplet dokumentów na czas, więc jego praca kosztuje mniej, a faktury są opłacane.]',
  'svc.2.l1': 'dokumenty do rozliczenia VAT zebrane, sprawdzone i przygotowane',
  'svc.2.l2': 'dane do PAYE przygotowywane co miesiąc',
  'svc.2.l3': 'dane do CT600 przygotowane dla księgowego',
  'svc.2.l4': 'fakturowanie, monitorowanie i windykacja miękka płatności',
  'svc.2.l5': 'bieżący kontakt z biurem rachunkowym',
  'svc.3.h': 'Operacje biurowe i sprawy pracownicze',
  'svc.3.p': '[Placeholder — efekt w jednej linii: dokumenty do znalezienia, korespondencja odpisana, nowi pracownicy wdrożeni bez Twojego udziału.]',
  'svc.3.l1': 'organizacja dokumentów, struktura archiwum i archiwizacja',
  'svc.3.l2': 'obsługa skrzynki i korespondencji',
  'svc.3.l3': 'bieżąca obsługa administracyjna',
  'svc.3.l4': 'dokumentacja pracownicza i onboarding nowych osób',
  'svc.3.l5': 'spisane procedury administracyjne dla zespołu',

  /* pricing.* keys kept for when the pricing panel comes back:
     'pricing.label', 'pricing.h', 'pricing.l1'–'pricing.l4' */

  'svc.disc.label': 'Czego nie robię',
  'svc.disc.h': 'Pracuję obok Twojego księgowego, nigdy zamiast niego.',
  'svc.disc.p': 'Przygotowuję, porządkuję i kontaktuję się z urzędami. Twój księgowy składa deklaracje, zatwierdza sprawozdania i doradza podatkowo.',

  'why.eyebrow': 'Porównanie',
  'why.h2': 'Cztery opcje, które masz teraz na stole',
  'why.intro': '[Placeholder — jedno zdanie: uczciwe porównanie, łącznie z tym, kiedy któraś z pozostałych opcji jest naprawdę lepsza. Powiedzenie tego wprost uwiarygadnia resztę.]',
  'why.1.tag': 'Opcja A',
  'why.1.h': 'Twój księgowy',
  'why.1.p': 'Składa deklaracje. Nie pilnuje faktur, nie porządkuje dokumentów, nie odpisuje na pocztę.',
  'why.1.fine': '[Placeholder — jedna linia: ile bierze za prace administracyjne, jeśli o nie poprosisz, i dlaczego to nie jest jego rola.]',
  'why.2.tag': 'Opcja A',
  'why.2.h': 'Office manager na etacie',
  'why.2.p': 'Od £30 000 rocznie plus składki, emerytura, zastępstwa i czas na rekrutację.',
  'why.2.fine': '[Placeholder — jedna linia: powyżej pewnej wielkości to właściwy wybór — napisz mniej więcej gdzie leży ta granica.]',
  'why.3.tag': 'Opcja B',
  'why.3.h': 'Wirtualna asystentka',
  'why.3.p': 'Taniej za godzinę, ale znajomość przepisów w UK — i nadzór — dokładasz Ty.',
  'why.3.fine': '[Placeholder — jedna linia: sprawdzi się przy skrzynce i kalendarzu; ryzyko zaczyna się przy terminach ustawowych.]',
  'why.4.tag': 'Opcja C',
  'why.4.h': 'Zostawiasz to sobie',
  'why.4.p': 'Za darmo — do pierwszego przekroczonego terminu, niezapłaconej faktury i kolejnego weekendu.',
  'why.4.fine': '[Placeholder — jedna linia: podaj aktualne kwoty kar Companies House i HMRC, żeby to ukonkretnić.]',
  'why.badge': 'Aventress',
  'why.us.h': 'Administracja ze znajomością przepisów, jedna konkretna osoba, stała opłata miesięczna',
  'newspaper.why.us.h': 'Administracja ze znajomością przepisów, jedna konkretna osoba',
  'why.us.p': '[Placeholder — 2 zdania: pozycjonowanie prostym językiem. Stałe wsparcie od kogoś, kto zna administrację spółek w UK, za ułamek kosztu etatu i bez okresu wdrożenia.]',
  'why.us.l1': 'Wiem, czym różni się CS01 od CT600 — nie trzeba mnie wdrażać ani pilnować.',
  'why.us.l2': 'Stała współpraca miesięczna, a nie godziny, które trzeba dokupywać.',
  'why.us.l3': 'Czytam pismo z HMRC i tłumaczę, co z niego naprawdę wynika — po polsku lub po angielsku.',

  'statement.line': '[Placeholder — jedna linia, powiedziana wprost. Myśl, z którą czytelnik ma zostać — np. że papiery to nie firma, tylko coś, co się firmą udaje.]',
  'statement.cta': 'Porozmawiajmy →',
  'newspaper.statement.cta': 'Sprawdź, czy to pasuje →',

  'about.eyebrow': 'Z kim będziesz pracować',
  'about.h2': 'Nazywam się [Imię Nazwisko]',
  'about.cred': '10+ lat prowadzenia administracji firm w UK — VAT, PAYE, CT600, dokumenty do Companies House i wszystko, co jest wokół nich.',
  'about.p1': '[Placeholder — 2–3 zdania: skąd doświadczenie (etat? biuro rachunkowe? ile firm?), z jakimi firmami pracuje się najlepiej i dlaczego założyłaś własną działalność. Tu konkret działa lepiej niż ciepły ton — klient decyduje, czy powierzyć Ci dokumenty spółki.]',
  'about.photo': '[Zdjęcie — biurko, dokumenty, kadr poziomy 3:2. Prawdziwe miejsce pracy, nie stock.]',
  'about.photoCap': 'Fot. — miejsce pracy, Londyn',
  'about.recommended': 'Większość klientów trafia do mnie z polecenia — od innych właścicieli firm i od ich księgowych.',

  'creds.1.k': 'Rejestracja',
  'creds.1.v': '[Numer w Companies House + numer rejestracji ICO]',
  'creds.2.k': 'Ubezpieczenie',
  'creds.2.v': '[Professional indemnity — ubezpieczyciel i suma]',
  'creds.3.k': 'Systemy',
  'creds.3.v': '[Xero · QuickBooks · Sage — te, których faktycznie używasz]',
  'creds.4.k': 'Dane',
  'creds.4.v': '[Gdzie przechowywane są dokumenty i kto ma do nich dostęp — RODO w jednej linii]',

  'quote.1': '„[Placeholder — cytat o decyzji, nie o usłudze. Najlepiej: czego się obawiali przed współpracą i co się zmieniło po. Konkret działa lepiej niż zachwyt.]"',
  'quote.1.n': '[Imię]',
  'quote.1.c': '[stanowisko, branża, wielkość firmy, Londyn]',
  'quote.2': '„[Placeholder — drugi cytat od innego typu klienta — budowlanka, klinika albo firma rodzinna — żeby obie grupy zobaczyły siebie. Liczba w cytacie jest warta więcej niż przymiotnik.]"',
  'quote.2.n': '[Imię]',
  'quote.2.c': '[stanowisko, branża, wielkość firmy, Londyn]',

  'faq.eyebrow': 'Zanim porozmawiamy',
  'faq.h2': 'Pytania, które padają na każdej pierwszej rozmowie',
  'faq.intro': '[Placeholder — jedno zdanie: odpowiedzi są tutaj, żeby rozmowa mogła dotyczyć Twojej firmy.]',
  'faq.1.q': 'Czy jesteś księgową?',
  'faq.1.a': '[Placeholder — nie, i napisz wprost, co to oznacza: administracja i back office, nie składanie deklaracji ani doradztwo podatkowe. To pytanie o zaufanie, nie o formalność.]',
  'faq.2.q': 'Czy możesz pracować z księgowym, którego już mamy?',
  'faq.2.a': '[Placeholder — tak, to standardowy układ. Jedna linia o tym, jak co miesiąc wygląda przekazanie dokumentów.]',
  'faq.3.q': 'Czy jest umowa albo okres minimalny?',
  'faq.3.a': '[Placeholder — podaj okres wypowiedzenia i to, że nie ma zobowiązania na dłużej. Zdjęcie tego ryzyka domyka decyzję o rozmowie.]',
  'faq.4.q': 'Jak wygląda kwestia naszych dokumentów i danych?',
  'faq.4.a': '[Placeholder — gdzie trzymane są dokumenty, kto ma dostęp, rejestracja ICO i co dzieje się ze wszystkim po zakończeniu współpracy.]',
  'faq.5.q': 'A jeśli potrzebujemy tylko części tego zakresu?',
  'faq.5.a': '[Placeholder — zakres może zacząć się od jednego obszaru i rosnąć. Podaj przykład mniejszego pakietu na start.]',
  'faq.6.q': 'Czy pracujesz z firmami spoza Londynu?',
  'faq.6.a': '[Placeholder — zdalnie w całej UK, spotkania na żywo w Londynie, jeśli ktoś woli. Wspomnij o językach.]',

  'contact.eyebrow': 'Porozmawiajmy',
  'contact.h2': 'Powiedz, co masz na głowie.<br>Dwadzieścia minut, bez zobowiązań.',
  'newspaper.contact.h2': 'Powiedz, co masz na głowie.',
  'contact.lede': '[Placeholder — 1–2 zdania: bez przygotowania, bez dokumentów, bez sprzedażowego pitchu. Jeśli to nie jest dopasowanie, usłyszysz to na rozmowie.]',
  'contact.s1': 'Opowiadasz, co dziś ląduje na Twoim biurku.',
  'contact.s2': 'Mówię, co bym przejęła — i czego bym nie ruszała.',
  'contact.s3': 'Jeśli to pasuje, dostajesz zakres na piśmie. [Placeholder — w jakim czasie.]',
  'contact.mail': 'E-mail',
  'contact.phone': 'Telefon',
  'contact.hours': 'Godziny',
  'contact.hoursVal': '[Placeholder — np. pon–pt, 9:00–17:00]',
  'contact.gbpLabel': 'Google',
  'contact.gbp': 'Profil firmy w Google',

  'form.head': 'Napisz wiadomość',
  'form.name': 'Imię i nazwisko',
  'form.companyLabel': 'Firma',
  'form.company': 'Firma <span class="opt">(i mniej więcej ile osób)</span>',
  'form.optional': '(opcjonalnie)',
  'form.email': 'E-mail',
  'form.msg': 'Co oddałbyś w pierwszej kolejności?',
  'form.msgPh': '[Placeholder — np. terminy i Companies House plus fakturowanie — księgowego już mamy]',
  'form.requiredNote': 'Pola wymagane są oznaczone *',
  'form.submit': 'Sprawdź wiadomość',
  'form.loading': 'Sprawdzam…',
  'form.note': 'Ten formularz demonstracyjny nie wysyła danych. Przed publikacją należy podłączyć bezpieczny punkt końcowy.',

  'footer.tag': '[Placeholder — jedna linia: stała obsługa administracyjna i back office dla małych spółek LTD w UK. Londyn, po polsku i po angielsku.]',
  'footer.company': 'Dane spółki',
  'footer.crn': 'Company number',
  'footer.office': 'Registered office',
  'footer.sic': 'SIC',
  'footer.nav': 'Na stronie',
  'footer.legal': 'Informacje',
  'footer.privacy': 'Polityka prywatności',
  'footer.disclaimer': '[Placeholder — nota: Aventress Ltd świadczy usługi administracyjne i back office. Nie jest biurem rachunkowym, doradcą podatkowym ani regulowaną firmą finansową.]',
  'footer.rights': 'Wszelkie prawa zastrzeżone.'
};

/* form status messages, per language */
const STATUS = {
  en: {
    missing: 'Please fill in the highlighted fields.',
    name: 'Enter your name.',
    emailMissing: 'Enter your email address.',
    emailInvalid: 'Enter an email address in the format name@example.com.',
    checking: 'Checking your message…',
    demo: 'Demo only — your message is valid, but it has not been sent.',
    network: 'The message could not be sent. Please use the email address or try again.'
  },
  pl: {
    missing: 'Uzupełnij zaznaczone pola.',
    name: 'Wpisz imię i nazwisko.',
    emailMissing: 'Wpisz adres e-mail.',
    emailInvalid: 'Wpisz adres e-mail w formacie nazwa@przyklad.pl.',
    checking: 'Sprawdzam wiadomość…',
    demo: 'Tylko demonstracja — wiadomość jest poprawna, ale nie została wysłana.',
    network: 'Nie udało się wysłać wiadomości. Użyj adresu e-mail lub spróbuj ponownie.'
  }
};

const MENU_LABELS = {
  en: { open: 'Open menu', close: 'Close menu' },
  pl: { open: 'Otwórz menu', close: 'Zamknij menu' }
};

/* --------------------------------------------------------------------------
   Language switch
   -------------------------------------------------------------------------- */
const EN_DICT = {};       // captured from the markup on load
let currentLang = 'en';

function captureEnglish() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    EN_DICT[el.dataset.i18n] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    EN_DICT[el.dataset.i18nPh] = el.getAttribute('placeholder');
  });
}

function setLang(lang) {
  const dict = lang === 'pl' ? PL_DICT : EN_DICT;
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = dict[el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = dict[el.dataset.i18nPh];
    if (val !== undefined) el.setAttribute('placeholder', val);
  });

  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    const selected = b.dataset.lang === lang;
    b.classList.toggle('is-active', selected);
    b.setAttribute('aria-pressed', String(selected));
  });
  const burger = document.querySelector('.burger');
  if (burger) {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-label', MENU_LABELS[lang][open ? 'close' : 'open']);
  }

  try { localStorage.setItem('aventress-lang', lang); } catch (e) { /* private mode */ }
}

/* --------------------------------------------------------------------------
   Init
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  captureEnglish();

  /* English by default; a previous explicit choice wins */
  let saved = null;
  try { saved = localStorage.getItem('aventress-lang'); } catch (e) { /* ignore */ }
  setLang(saved === 'pl' ? 'pl' : 'en');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  /* sticky header rule */
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* mobile nav */
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const main = document.querySelector('main');
  const footer = document.querySelector('.site-footer');

  if (burger && nav) {
    const closeMenu = (returnFocus = false) => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', MENU_LABELS[currentLang].open);
      document.body.classList.remove('menu-open');
      if (main) main.inert = false;
      if (footer) footer.inert = false;
      if (returnFocus) burger.focus();
    };

    const openMenu = () => {
      nav.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', MENU_LABELS[currentLang].close);
      document.body.classList.add('menu-open');
      if (main) main.inert = true;
      if (footer) footer.inert = true;
      burger.focus();
    };

    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') === 'true';
      if (open) closeMenu(true);
      else openMenu();
    });

    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMenu()));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
        event.preventDefault();
        closeMenu(true);
      }
      if (event.key === 'Tab' && burger.getAttribute('aria-expanded') === 'true') {
        const focusable = [...document.querySelectorAll('.site-header a, .site-header button:not([disabled])')]
          .filter(element => element.offsetParent !== null);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 760 && burger.getAttribute('aria-expanded') === 'true') closeMenu();
    });
  }

  /* scroll reveal */
  const targets = document.querySelectorAll(
    '.hero-copy, .hero-portrait, .sec-head, .sec-intro, .fit-row, .step, .promise, .svc-block, ' +
    '.flow, .sectors, .pricing, .disclaimer, .why-alt, .why-us, .about-photo, .about-copy, .creds, .quote, ' +
    '.faq-item, .contact-copy, .contact-form'
  );
  targets.forEach(el => el.setAttribute('data-reveal', ''));

  /* Short, local staggers keep repeated rows readable without making the
     whole page wait on one long animation sequence. */
  [
    '.fit-list .fit-row',
    '.steps .step',
    '.svc-stack .svc-block',
    '.why-grid .why-alt',
    '.faq-grid .faq-item'
  ].forEach(selector => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.style.setProperty('--reveal-delay', `${index * 55}ms`);
    });
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(el => io.observe(el));
  } else {
    targets.forEach(el => el.classList.add('is-in'));
  }

  /* year in footer */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* contact form — front-end only for now.
     Wire to a mail endpoint (Formspree / Netlify Forms / own handler) before launch. */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form && status) {
    const submit = form.querySelector('button[type="submit"]');

    const fieldMessage = (input, msgs) => {
      if (input.id === 'f-name' && input.value.trim() === '') return msgs.name;
      if (input.id === 'f-email' && input.value.trim() === '') return msgs.emailMissing;
      if (input.type === 'email' && !input.validity.valid) return msgs.emailInvalid;
      return '';
    };

    const validateField = (input) => {
      const message = fieldMessage(input, STATUS[currentLang]);
      const error = document.getElementById(`${input.id}-error`);
      input.setAttribute('aria-invalid', String(Boolean(message)));
      input.closest('.field').classList.toggle('has-error', Boolean(message));
      if (error) error.textContent = message;
      return !message;
    };

    const setFormState = (state, message) => {
      form.classList.toggle('is-submitting', state === 'submitting');
      form.setAttribute('aria-busy', String(state === 'submitting'));
      submit.disabled = state === 'submitting';
      status.className = `form-status${state ? ` is-${state}` : ''}`;
      status.textContent = message || '';
    };

    form.querySelectorAll('[required]').forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.getAttribute('aria-invalid') === 'true') validateField(input);
        if (status.classList.contains('is-error')) setFormState('', '');
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const required = [...form.querySelectorAll('[required]')];
      const valid = required.map(validateField).every(Boolean);

      if (!valid) {
        setFormState('error', STATUS[currentLang].missing);
        required.find(input => input.getAttribute('aria-invalid') === 'true')?.focus();
        return;
      }

      setFormState('submitting', STATUS[currentLang].checking);
      window.setTimeout(() => {
        const simulateFailure = form.elements.email.value.toLowerCase().endsWith('@network.test');
        if (simulateFailure) {
          setFormState('error', STATUS[currentLang].network);
          form.elements.email.focus();
        } else {
          setFormState('demo', STATUS[currentLang].demo);
        }
      }, 350);
    });
  }
});
