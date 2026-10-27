export const locales = ['en', 'fr'] as const;

export type Locale = (typeof locales)[number];
export type SitePage = 'home' | 'downloads' | 'privacy';

interface LayoutCopy {
  title: string;
  description: string;
  skipLink: string;
  homeLink: string;
  primaryNav: string;
  features: string;
  downloads: string;
  questions: string;
  showNavigation: string;
  downloadFree: string;
  mobileDownload: string;
  languageSelector: string;
  switchToEnglish: string;
  switchToFrench: string;
  footerSummary: string;
  footerLinks: string;
  sourceCode: string;
  releases: string;
  reportIssue: string;
  privacy: string;
}

interface HomeCopy {
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  downloadFree: string;
  seeFeatures: string;
  platformAvailability: string;
  workflowLabel: string;
  workflow: [string, string, string];
  screenshotLink: string;
  screenshotImage: string;
  screenshotAlt: string;
  zoom: string;
  screenshotCaption: string;
  featureTitle: string;
  featureIntro: string;
  features: { icon: string; title: string; description: string }[];
  workspaceTitle: string;
  preferences: { title: string; description: string }[];
  privacyTitle: string;
  privacyText: string;
  sourceCode: string;
  downloadTitle: string;
  downloadDescription: string;
  downloadButton: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  support: string;
  contactOnGithub: string;
}

interface DownloadsCopy {
  title: string;
  description: string;
  heading: string;
  intro: string;
  filterLabel: string;
  allPlatforms: string;
  windows: string;
  linux: string;
  macos: string;
  loading: string;
  noScript: string;
  githubReleases: string;
  checksumIntro: string;
  fullNotes: string;
  dynamic: {
    loading: string;
    preRelease: string;
    stable: string;
    published: string;
    releaseNotes: string;
    windowsInstaller: string;
    windowsPortable: string;
    debianPackage: string;
    linuxPortable: string;
    macPortable: string;
    macInstaller: string;
    macPackage: string;
    linuxApp: string;
    linuxRpm: string;
    downloadAsset: string;
    checksum: string;
    noDesktopAssets: string;
    noReleases: string;
    noPlatformReleases: string;
    countOne: string;
    countMany: string;
    platformNames: { windows: string; linux: string; macos: string };
    requestFailed: string;
    invalidResponse: string;
    loadingFailed: string;
    openAll: string;
    retry: string;
    megabytes: string;
  };
}

interface PrivacySectionCopy {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  after?: string;
  externalPolicy?: string;
  externalRepository?: string;
  contactEmail?: boolean;
}

interface PrivacyCopy {
  title: string;
  description: string;
  heading: string;
  updatedLabel: string;
  intro: string;
  sections: PrivacySectionCopy[];
}

interface LocaleCopy {
  layout: LayoutCopy;
  home: HomeCopy;
  downloads: DownloadsCopy;
  privacy: PrivacyCopy;
}

export const localizedRoutes: Record<Locale, Record<SitePage, string>> = {
  en: {
    home: '/',
    downloads: '/downloads/',
    privacy: '/privacy/',
  },
  fr: {
    home: '/fr/',
    downloads: '/fr/telechargement/',
    privacy: '/fr/confidentialite/',
  },
};

export function localizePath(basePath: string, locale: Locale, page: SitePage): string {
  return `${basePath}${localizedRoutes[locale][page].replace(/^\//, '')}`;
}

export const siteCopy: Record<Locale, LocaleCopy> = {
  en: {
    layout: {
      title: 'markdim — free, open-source Markdown editor',
      description: 'A free, open-source desktop Markdown workspace for reading, writing, editing, and exporting .md files. Public beta downloads for Windows and Linux; macOS is a project target.',
      skipLink: 'Skip to content',
      homeLink: 'markdim, home',
      primaryNav: 'Primary navigation',
      features: 'Features',
      downloads: 'Downloads',
      questions: 'FAQ',
      showNavigation: 'Show navigation',
      downloadFree: 'Download free',
      mobileDownload: 'Download',
      languageSelector: 'Language',
      switchToEnglish: 'Switch language to English',
      switchToFrench: 'Passer le site en français',
      footerSummary: 'A desktop workspace for reading, editing, and exporting Markdown documents.',
      footerLinks: 'More links',
      sourceCode: 'Source code',
      releases: 'Releases',
      reportIssue: 'Report an issue',
      privacy: 'Privacy',
    },
    home: {
      title: 'markdim — free, open-source Markdown editor',
      description: 'A free, open-source desktop Markdown editor for creating, reviewing, and editing .md files, with live preview and local PDF export.',
      heroTitle: 'Read. Write. Export.',
      heroDescription: 'A free, open-source desktop editor to create, review, and edit your .md files, then export them as PDFs.',
      downloadFree: 'Download free',
      seeFeatures: 'Explore features',
      platformAvailability: 'Designed for Windows, macOS, and Linux · public beta for Windows and Linux',
      workflowLabel: 'Markdown workflow',
      workflow: ['Write', 'Review', 'PDF'],
      screenshotLink: 'Open the actual markdim screenshot at full size',
      screenshotImage: 'images/markdim-workspace.en.webp',
      screenshotAlt: 'Actual markdim screenshot in dark mode: English Markdown source on the left and rendered preview on the right.',
      zoom: 'Enlarge',
      screenshotCaption: 'Actual application capture showing a local sample document.',
      featureTitle: 'One workspace for all your Markdown.',
      featureIntro: 'Open a file or folder, edit the source, and keep the rendered result in view. No account to create and no copying between tools.',
      features: [
        { icon: 'ph-folder-open', title: 'Open what you already have.', description: 'Open .md and .markdown files or an entire folder. Search documents, revisit recent files, and browse the heading outline.' },
        { icon: 'ph-columns', title: 'Read as you write.', description: 'Edit Markdown and watch headings, lists, tables, links, tasks, and code blocks take shape in the live preview.' },
        { icon: 'ph-tabs', title: 'Keep several notes close at hand.', description: 'Switch between tabs, reorder documents, and find or replace text with keyboard shortcuts.' },
        { icon: 'ph-file-pdf', title: 'A PDF when you need one.', description: 'Export from the same workspace without moving your content into an online converter.' },
      ],
      workspaceTitle: 'Your workspace, your way.',
      preferences: [
        { title: 'Arrange your workspace.', description: 'Show or collapse the library, editor, and preview. Resize them and return to the same layout next time.' },
        { title: 'Adjust the text.', description: 'Hold Ctrl and scroll to zoom the editor. You can also show spaces and line endings.' },
        { title: 'Choose an appearance.', description: 'Switch between light and dark themes. Your choice is remembered for future sessions.' },
        { title: 'Open files faster.', description: 'On Windows, add markdim to the Open with menu for Markdown files.' },
      ],
      privacyTitle: 'Your files stay yours.',
      privacyText: 'markdim works with local files. No account, cloud sync, or telemetry. Its source code is public under the MIT License.',
      sourceCode: 'View source code',
      downloadTitle: 'Get markdim.',
      downloadDescription: 'Free and open source. Public betas for Windows and Linux; the project also targets macOS. Check the available packages and release notes before installing.',
      downloadButton: 'Download free',
      faqTitle: 'Frequently asked questions.',
      faqs: [
        { question: 'Is markdim free?', answer: 'Yes. markdim is open source under the MIT License, and public beta builds are free to download with no account or subscription.' },
        { question: 'Can I create a .md file or edit an existing one?', answer: 'Yes. Create a blank note, open a .md or .markdown file, then edit the text and save your changes.' },
        { question: 'Which Markdown features does the preview support?', answer: 'CommonMark and Markdig advanced extensions: headings, tables, nested lists, tasks, links, images, and syntax-highlighted code blocks.' },
        { question: 'Can I export a document as PDF?', answer: 'Yes. Export the document from the File menu without copying it into another tool.' },
        { question: 'Which versions are available?', answer: 'Public beta downloads are currently available for Windows and Linux. The project also targets macOS; check Releases for the packages that have shipped.' },
        { question: 'Do my files stay on my computer?', answer: 'Yes. markdim works with your local files and adds no online account, cloud sync, or telemetry.' },
        { question: 'Can I open a Markdown file created by OpenCode?', answer: 'Yes. Markdown files created by OpenCode or other tools open like any other .md file; no special import is needed.' },
        { question: 'How can I zoom the source text?', answer: 'Hold Ctrl and use the mouse wheel to zoom the editor text without changing the file.' },
      ],
      support: 'Have a question about a release or an issue to report?',
      contactOnGithub: 'Contact us on GitHub',
    },
    downloads: {
      title: 'Download markdim — all releases',
      description: 'Download markdim for Windows and Linux. Browse every published release, including betas, with available packages and SHA-256 checksums.',
      heading: 'Releases and downloads.',
      intro: 'Every published markdim release, including betas. This list syncs with GitHub on each visit; only files actually attached to a release are shown.',
      filterLabel: 'Platform',
      allPlatforms: 'All platforms',
      windows: 'Windows',
      linux: 'Linux',
      macos: 'macOS',
      loading: 'Loading published releases…',
      noScript: 'Enable JavaScript to see the synchronized release list, or browse the',
      githubReleases: 'markdim releases on GitHub',
      checksumIntro: 'Use the .sha256 files to verify download integrity. On Debian or Ubuntu, install the .deb package; on other Linux distributions, use the portable archive.',
      fullNotes: 'View full release notes on GitHub',
      dynamic: {
      loading: 'Loading published releases…',
      preRelease: 'Prerelease',
      stable: 'Stable',
      published: 'Published',
      releaseNotes: 'Release notes',
      windowsInstaller: 'Windows installer (.exe)',
      windowsPortable: 'Windows portable archive (.zip)',
      debianPackage: 'Debian / Ubuntu {architecture} package (.deb)',
      linuxPortable: 'Linux {architecture} portable archive (.tar.gz)',
      macPortable: 'macOS {architecture} portable archive (.tar.gz)',
      macInstaller: 'macOS installer (.dmg)',
      macPackage: 'macOS package (.pkg)',
      linuxApp: 'Linux app (.AppImage)',
      linuxRpm: 'Linux package (.rpm)',
      downloadAsset: 'Download {asset} for markdim {version}',
      checksum: 'SHA-256 checksum for {asset} {version}',
      noDesktopAssets: 'No desktop packages are attached to this release. See the release notes.',
      noReleases: 'No releases have been published yet.',
      noPlatformReleases: 'No releases with {platform} downloads have been published yet.',
      countOne: '1 release shown',
      countMany: '{count} releases shown',
      platformNames: { windows: 'Windows', linux: 'Linux', macos: 'macOS' },
      requestFailed: 'GitHub returned status {status}.',
      invalidResponse: 'The GitHub response is not a release list.',
      loadingFailed: 'Could not load releases right now.',
      openAll: 'View all releases on GitHub',
      retry: 'Try again',
      megabytes: 'MB',
      },
    },
    privacy: {
      title: 'Privacy policy — markdim',
      description: 'Learn what local data markdim uses, when it connects to the network, and how this official website works.',
      heading: 'Privacy policy.',
      updatedLabel: 'Last updated:',
      intro: 'markdim is a desktop app for working with local Markdown files. It does not send the contents of your documents to Numera11y and includes no online account, advertising, or telemetry.',
      sections: [
        { title: 'Who is responsible?', paragraphs: ['The markdim app and this website are published by Numera11y. For questions about this policy or your personal data, email'], contactEmail: true },
        { title: 'Data processed by the app', paragraphs: [], bullets: [
          'Markdown files, local images, and PDFs stay on your device. markdim does not upload their contents to Numera11y.',
          'Preferences are stored locally in the app settings. They include the theme, layout, last-document path, and up to five recent file paths.',
          'A local diagnostic log may contain technical events, exception types, and stack-trace information. It does not record document text or paths; its size is limited and rotation replaces the previous log.',
          'Diagnostic screenshots are created only when you explicitly launch a diagnostic mode and request a capture. They may show the document on screen; review them before sharing.',
        ], after: 'Settings and logs stay on your device in markdim’s local data folder. You can delete them through the file system; settings and recent files will then reset.' },
        { title: 'External images and links', paragraphs: [
          'If a Markdown document contains a remote HTTPS image, markdim attempts to load it for the preview. The request goes directly to the image host; that host may receive your IP address, the image URL, and the usual technical information from a network request. markdim does not send the document text or local file path to the host. Remote images are not sent to Numera11y.',
          'Web links in a document open in your browser only when you select them. Third-party sites have their own practices and privacy policies.',
        ] },
        { title: 'Data related to this website', paragraphs: [
          'This website is hosted by GitHub Pages. The downloads page requests the public GitHub API from your browser to show published releases and files; GitHub receives that request and usual network information, including your IP address. The page does not send information you enter to Numera11y.',
          'The website uses no account, form, advertising, cookies, or audience analytics. Links to GitHub, Microsoft Store, and other sites open their services, which are covered by their own policies.',
        ] },
        { title: 'Installing from Microsoft Store', paragraphs: [
          'If you install markdim from the Microsoft Store, Microsoft processes information required for your account, downloads, licensing, and Store operation under its',
        ], externalPolicy: 'privacy statement', after: '. markdim does not receive your Microsoft account payment information.' },
        { title: 'Your choices and rights', paragraphs: [
          'You control files, preferences, and logs stored locally and can delete them at any time. For questions or requests about personal data processed by Numera11y, contact us at',
        ], contactEmail: true, after: '. If you live in the European Union, you can also contact your competent data protection authority.' },
        { title: 'Changes', paragraphs: [
          'This page will be updated if data-processing practices change. The current version is published here; markdim’s source code is available on',
        ], externalRepository: 'GitHub', after: '.' },
      ],
    },
  },
  fr: {
    layout: {
      title: 'markdim — éditeur Markdown gratuit et open source',
      description: 'Éditeur Markdown de bureau gratuit et open source pour lire, écrire, modifier et exporter vos fichiers .md. Bêtas publiques Windows et Linux; le projet cible aussi macOS.',
      skipLink: 'Aller au contenu',
      homeLink: 'markdim, accueil',
      primaryNav: 'Navigation principale',
      features: 'Fonctionnalités',
      downloads: 'Téléchargements',
      questions: 'Questions',
      showNavigation: 'Afficher la navigation',
      downloadFree: 'Télécharger gratuitement',
      mobileDownload: 'Télécharger',
      languageSelector: 'Langue',
      switchToEnglish: 'Switch language to English',
      switchToFrench: 'Passer le site en français',
      footerSummary: 'Un espace de bureau pour lire, éditer et exporter vos documents Markdown.',
      footerLinks: 'Liens complémentaires',
      sourceCode: 'Code source',
      releases: 'Versions',
      reportIssue: 'Signaler un problème',
      privacy: 'Confidentialité',
    },
    home: {
      title: 'markdim — éditeur Markdown gratuit et open source',
      description: 'Éditeur Markdown de bureau gratuit et open source pour créer, relire et modifier vos fichiers .md, avec aperçu en direct et export PDF local.',
      heroTitle: 'Lire. Écrire. Exporter.',
      heroDescription: 'L’éditeur de bureau gratuit et open source pour créer, relire et modifier vos fichiers .md, puis les exporter en PDF.',
      downloadFree: 'Télécharger gratuitement',
      seeFeatures: 'Voir les fonctionnalités',
      platformAvailability: 'Conçu pour Windows, macOS et Linux · bêta publique Windows et Linux',
      workflowLabel: 'Parcours du Markdown',
      workflow: ['Écrire', 'Relire', 'PDF'],
      screenshotLink: 'Ouvrir la capture réelle de markdim en taille originale',
      screenshotImage: 'images/markdim-workspace.webp',
      screenshotAlt: 'Capture réelle de markdim en mode sombre : source Markdown à gauche et aperçu rendu à droite.',
      zoom: 'Agrandir',
      screenshotCaption: 'Capture réelle de l’application avec un document local d’exemple.',
      featureTitle: 'Un bureau pour tout votre Markdown.',
      featureIntro: 'Ouvrez un fichier ou un dossier, écrivez dans la source et gardez le rendu à portée de regard. Pas de compte à créer, pas de copier-coller entre outils.',
      features: [
        { icon: 'ph-folder-open', title: 'Ouvrez ce que vous avez déjà.', description: 'Ouvrez des fichiers .md et .markdown ou un dossier entier. Recherchez un document, retrouvez les fichiers récents et naviguez dans le plan des titres.' },
        { icon: 'ph-columns', title: 'Lisez pendant que vous écrivez.', description: 'Modifiez le Markdown et voyez ses titres, listes, tableaux, liens, tâches et blocs de code prendre forme dans l’aperçu en direct.' },
        { icon: 'ph-tabs', title: 'Gardez plusieurs notes sous la main.', description: 'Passez d’un onglet à l’autre, réordonnez vos documents, cherchez et remplacez du texte avec les raccourcis clavier.' },
        { icon: 'ph-file-pdf', title: 'Un PDF, quand vous en avez besoin.', description: 'Exportez votre document depuis le même bureau, sans en déplacer le contenu dans un convertisseur web.' },
      ],
      workspaceTitle: 'Votre bureau, à votre façon.',
      preferences: [
        { title: 'Réglez l’espace.', description: 'Affichez ou repliez la bibliothèque, l’éditeur et l’aperçu. Redimensionnez-les et retrouvez leur disposition à la prochaine ouverture.' },
        { title: 'Ajustez le texte.', description: 'Maintenez Ctrl et tournez la molette pour zoomer dans l’éditeur. Les espaces et fins de ligne peuvent aussi être affichés.' },
        { title: 'Choisissez l’apparence.', description: 'Passez du thème clair au thème sombre. Votre choix est conservé pour vos prochaines sessions.' },
        { title: 'Ouvrez plus vite.', description: 'Sous Windows, ajoutez markdim au menu « Ouvrir avec » pour vos fichiers Markdown.' },
      ],
      privacyTitle: 'Vos fichiers restent à vous.',
      privacyText: 'markdim travaille avec vos fichiers locaux. Sans compte, sans synchronisation cloud et sans télémétrie. Son code source est public sous licence MIT.',
      sourceCode: 'Voir le code source',
      downloadTitle: 'Téléchargez markdim.',
      downloadDescription: 'Éditeur gratuit et open source. Bêtas publiques pour Windows et Linux; le projet cible aussi macOS. Vérifiez les paquets et notes de version avant l’installation.',
      downloadButton: 'Télécharger gratuitement',
      faqTitle: 'Questions fréquentes.',
      faqs: [
        { question: 'markdim est-il gratuit ?', answer: 'Oui. markdim est open source sous licence MIT et les versions bêta sont téléchargeables gratuitement, sans compte ni abonnement.' },
        { question: 'Puis-je créer un fichier .md ou modifier un fichier existant ?', answer: 'Oui. Créez une note vierge, ouvrez un fichier .md ou .markdown, puis éditez le texte et enregistrez vos modifications.' },
        { question: 'Quels éléments Markdown l’aperçu prend-il en charge ?', answer: 'CommonMark et les extensions avancées de Markdig : titres, tableaux, listes imbriquées, tâches, liens, images et blocs de code colorés.' },
        { question: 'Puis-je exporter un document en PDF ?', answer: 'Oui. Exportez le document depuis le menu Fichier, sans le copier dans un autre outil.' },
        { question: 'Quelles versions sont disponibles ?', answer: 'Les versions bêta publiques sont actuellement disponibles pour Windows et Linux. Le projet cible aussi macOS; consultez les releases pour connaître les paquets publiés.' },
        { question: 'Mes fichiers restent-ils sur mon ordinateur ?', answer: 'Oui. markdim travaille avec vos fichiers locaux et n’ajoute ni compte en ligne, ni synchronisation cloud, ni télémétrie.' },
        { question: 'Puis-je ouvrir un fichier .md produit par OpenCode ?', answer: 'Oui. Les fichiers Markdown produits par OpenCode ou d’autres outils s’ouvrent comme les autres fichiers .md : aucun import spécial n’est nécessaire.' },
        { question: 'Comment agrandir le texte de la source ?', answer: 'Maintenez Ctrl et faites tourner la molette pour zoomer dans le texte de l’éditeur, sans modifier le fichier.' },
      ],
      support: 'Un doute sur une version ou un problème rencontré ?',
      contactOnGithub: 'Écrivez-nous sur GitHub',
    },
    downloads: {
      title: 'Télécharger markdim — toutes les versions',
      description: 'Téléchargez markdim pour Windows et Linux. Retrouvez toutes les versions publiées, bêtas comprises, avec leurs paquets et sommes SHA-256.',
      heading: 'Versions et téléchargements.',
      intro: 'Toutes les versions publiées de markdim, bêtas comprises. La liste est synchronisée avec GitHub à chaque visite; seuls les fichiers réellement attachés à une version sont proposés.',
      filterLabel: 'Système',
      allPlatforms: 'Tous les systèmes',
      windows: 'Windows',
      linux: 'Linux',
      macos: 'macOS',
      loading: 'Chargement des versions publiées…',
      noScript: 'Activez JavaScript pour afficher la liste synchronisée des versions, ou consultez directement les',
      githubReleases: 'releases markdim sur GitHub',
      checksumIntro: 'Les fichiers .sha256 permettent de vérifier l’intégrité du téléchargement. Sur Debian ou Ubuntu, installez le paquet .deb; sur les autres distributions Linux, utilisez l’archive portable.',
      fullNotes: 'Voir les notes de version complètes sur GitHub',
      dynamic: {
      loading: 'Chargement des versions publiées…',
      preRelease: 'Préversion',
      stable: 'Stable',
      published: 'Publiée',
      releaseNotes: 'Notes de version',
      windowsInstaller: 'Installateur Windows (.exe)',
      windowsPortable: 'Archive portable Windows (.zip)',
      debianPackage: 'Paquet Debian / Ubuntu {architecture} (.deb)',
      linuxPortable: 'Archive portable Linux {architecture} (.tar.gz)',
      macPortable: 'Archive portable macOS {architecture} (.tar.gz)',
      macInstaller: 'Installateur macOS (.dmg)',
      macPackage: 'Paquet macOS (.pkg)',
      linuxApp: 'Application Linux (.AppImage)',
      linuxRpm: 'Paquet Linux (.rpm)',
      downloadAsset: 'Télécharger {asset} pour markdim {version}',
      checksum: 'Somme SHA-256 pour {asset} {version}',
      noDesktopAssets: 'Aucun paquet pour ordinateur n’est joint à cette release. Consultez les notes de version.',
      noReleases: 'Aucune version publiée pour le moment.',
      noPlatformReleases: 'Aucune version publiée avec un téléchargement {platform} pour le moment.',
      countOne: '1 version affichée',
      countMany: '{count} versions affichées',
      platformNames: { windows: 'Windows', linux: 'Linux', macos: 'macOS' },
      requestFailed: 'GitHub a répondu avec le statut {status}.',
      invalidResponse: 'La réponse GitHub ne contient pas une liste de releases.',
      loadingFailed: 'Impossible de charger les versions pour le moment.',
      openAll: 'Ouvrir toutes les releases sur GitHub',
      retry: 'Réessayer',
      megabytes: 'Mo',
      },
    },
    privacy: {
      title: 'Politique de confidentialité — markdim',
      description: 'Données locales utilisées par markdim, connexions réseau facultatives et informations concernant le site officiel.',
      heading: 'Politique de confidentialité.',
      updatedLabel: 'Mise à jour :',
      intro: 'markdim est une application de bureau conçue pour travailler avec des fichiers Markdown locaux. Elle n’envoie pas le texte de vos documents à Numera11y et n’intègre ni compte en ligne, ni publicité, ni télémétrie.',
      sections: [
        { title: 'Qui est responsable ?', paragraphs: ['L’application markdim et ce site sont édités par Numera11y. Pour toute question sur cette politique ou sur vos données personnelles, écrivez à'], contactEmail: true },
        { title: 'Données traitées par l’application', paragraphs: [], bullets: [
          'Les fichiers Markdown, images locales et PDF restent sur votre appareil. markdim ne téléverse pas leur contenu vers Numera11y.',
          'Les préférences sont enregistrées localement dans les paramètres de l’application. Elles incluent notamment le thème, la disposition, le chemin du dernier document et jusqu’à cinq chemins récents.',
          'Un journal de diagnostic local peut contenir des événements techniques, des types d’erreur et des informations de pile d’appels. Il n’enregistre ni le texte des documents ni leurs chemins; sa taille est limitée et le journal précédent est remplacé lors de la rotation.',
          'Les captures de diagnostic ne sont créées que lorsque vous lancez explicitement un mode de diagnostic et demandez une capture. Elles peuvent montrer le document affiché; vérifiez-les avant de les partager.',
        ], after: 'Les paramètres et journaux restent sur l’appareil, dans le dossier local de markdim. Vous pouvez les supprimer depuis le système de fichiers; les réglages et fichiers récents seront alors réinitialisés.' },
        { title: 'Images et liens externes', paragraphs: [
          'Si un document Markdown contient une image distante HTTPS, markdim tente de la charger pour l’aperçu. La requête est envoyée directement à l’hébergeur de cette image; cet hébergeur peut recevoir votre adresse IP, l’URL de l’image et les informations techniques habituelles d’une requête réseau. Le texte du document et le chemin du fichier local ne lui sont pas transmis par markdim. Les images distantes ne sont pas envoyées à Numera11y.',
          'Les liens web d’un document s’ouvrent dans le navigateur uniquement lorsque vous les sélectionnez. Les sites tiers ont leurs propres pratiques et politiques de confidentialité.',
        ] },
        { title: 'Données liées au site', paragraphs: [
          'Le site est hébergé par GitHub Pages. La page de téléchargements interroge l’API publique de GitHub depuis votre navigateur afin d’afficher les versions et fichiers publiés; GitHub reçoit cette requête et les informations réseau habituelles, dont votre adresse IP. La page ne transmet à Numera11y aucune donnée saisie par vous.',
          'Le site n’utilise pas de compte, de formulaire, de publicité, de cookie ni d’outil d’analyse d’audience. Les liens vers GitHub, Microsoft Store et d’autres sites ouvrent leurs services, soumis à leurs propres politiques.',
        ] },
        { title: 'Installation depuis Microsoft Store', paragraphs: [
          'Si vous installez markdim depuis Microsoft Store, Microsoft traite les informations nécessaires à votre compte, au téléchargement, à la licence et au fonctionnement du Store selon sa',
        ], externalPolicy: 'politique de confidentialité', after: '. markdim ne reçoit pas les informations de paiement de votre compte Microsoft.' },
        { title: 'Vos choix et vos droits', paragraphs: [
          'Vous gardez le contrôle des fichiers, préférences et journaux conservés localement et pouvez les supprimer à tout moment. Pour une question ou une demande relative aux données personnelles traitées par Numera11y, contactez-nous à',
        ], contactEmail: true, after: '. Si vous résidez dans l’Union européenne, vous pouvez également saisir l’autorité de protection des données compétente, notamment la CNIL en France.' },
        { title: 'Modifications', paragraphs: [
          'Cette page sera actualisée si les pratiques de traitement changent. La version en vigueur est publiée ici; le code source de markdim est disponible sur',
        ], externalRepository: 'GitHub', after: '.' },
      ],
    },
  },
};
