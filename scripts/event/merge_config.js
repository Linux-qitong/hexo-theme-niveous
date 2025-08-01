hexo.extend.filter.register(
  "before_generate",
  () => {
    const defaultConfig = {
      site: {
        name: {
          class: "text",
          custom: "niveous",
        },
        siteIcon: "/img/pwa/favicon.ico",
        icon: "icon",
      },
      nav: {
        group: null,
        menu: null,
        right: {
          random: false,
          custom: [],
        },
      },
      hometop: {
        enable: false,
        banner: {
          title: "niveous",
          url: "A simple theme for Hexo",
          icon: null,
        },
        group: null,
        recommendList: {
          sup: "Recommend",
          title: "niveous Docs",
          url: "https://niveous.js.org/",
          img: "/img/default.avif",
          color: "none",
        },
      },
      aside: {
        home: { noSticky: "about", Sticky: "allInfo" },
        post: { noSticky: "about", Sticky: "allInfo" },
        page: { noSticky: "about", Sticky: "allInfo" },
        card: {
          author: {
            img: "/img/logo.png",
            sticker: "/img/happy-sticker.avif",
          },
          url: "/about/",
          content1: "niveous",
          state: {
            morning: "Good Morning",
            noon: "Good Noon",
            afternoon: "Good Afternoon",
            night: "Good Night",
            goodnight: "Good Night",
          },
          witty_words: [],
          information: null,
        },
        newest_comment: {
          enable: false,
          storage: 0.5,
          limit: 5,
        },
        toc: { post: true, page: false, vague: true },
        tags: { enable: true, limit: 20, highlight: false, list: [] },
        siteinfo: {
          postcount: true,
          wordcount: false,
          pv: true,
          uv: true,
          updatetime: true,
          runtimeenable: true,
          runtime: "2023-04-20 00:00:00",
        },
      },
      index_post_list: {
        direction: "column",
        column: 2,
        cover: "both",
      },
      page: {
        error: true,
        tags: true,
        categories: true,
        archives: 0,
        default: { cover: ["/img/default.avif"] },
      },
      post: {
        default: {
          cover: ["/img/default.avif"],
          locate: "China, Changsha",
          copyright: {
            enable: true,
            license: "CC BY-NC-SA 4.0",
            licenurl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
          },
        },
        ai: {
          enable: false,
          modelName: "GPT 3",
        },
        meta: {
          date: false,
          updated: false,
          locate: false,
          wordcount: false,
          readtime: false,
          pv: false,
          uv: false,
          comment: false,
        },
        award: {
          enable: false,
          appreciators: "/",
          title: "感谢您的赞赏。",
          desc: "因为有你们的支持，我才体会到写文章的价值。",
          list: [],
        },
        rss: null,
        covercolor: {
          enable: false,
          mode: "local",
          api: "https://api.qjqq.cn/api/Imgcolor?img=",
          time: 43200000,
        },
        share: { enable: false, list: [] },
        footer: {
          enable: true,
          desc: "The article from niveous",
          button: {
            enable: true,
            name: "Learn More",
            url: "/",
          },
        },
      },
      theme_color: {
        dark: "#ffc848",
        light: "#425AEF",
      },
      display_mode: {
        type: "auto",
        universe: false,
      },
      related_post: {
        enable: false,
        limit: 2,
        date_type: "created",
      },
      footer: {
        information: {
          author: false,
          left: null,
          right: null,
        },
        group: null,
        randomlink: {
          enable: false,
          num: 3,
        },
        privacy: null,
        license: null,
        links: null,
      },
      errorpage: {
        img: "https://7.isyangs.cn/34/65f2e65eae32a-34.png",
        text: "404 Not Found",
        recommendList: true,
      },
      brevity: {
        enable: false,
        music: false,
        home_mini: false,
        style: 1,
        strip: 30,
      },
      recent_comments: {
        enable: false,
        limit: 50,
        console: false,
        page: "/recentcomments/",
      },
      envelope: {
        enable: false,
        line: 10,
        speed: 20,
        hover: true,
        loop: true,
        page: "/message/",
      },
      meting_api:
        "https://meting.qjqq.cn/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
      music: {
        enable: false,
        id: "8407304077",
        server: "netease",
        type: "playlist",
        volume: 0.8,
        mutex: true,
      },
      capsule: {
        enable: false,
        id: "8407304077",
        server: "netease",
        type: "playlist",
        volume: 0.8,
      },
      keyboard: {
        enable: false,
        list: [],
      },
      lazyload: {
        enable: false,
        field: "site",
        placeholder: "/img/loading.avif",
        errorimg: "/img/error_load.avif",
      },
      loading: {
        fullpage: false,
        pace: true,
      },
      highlight: {
        enable: true,
        limit: 200,
        copy: true,
        expand: true,
        theme: "default",
        color: "default",
      },
      lightbox: false,
      fancybox: false,
      mediumZoom: false,
      mermaid: false,
      chart: false,
      typeit: false,
      OpenGraph: {
        enable: false,
        options: null,
      },
      wordcount: false,
      busuanzi: false,
      search: {
        enable: false,
        type: "local",
        tags: [],
        algolia: null,
        local: {
          preload: false,
          CDN: null,
        },
        docsearch: {
          appId: null,
          apiKey: null,
          indexName: null,
          option: null,
        },
      },
      rightside: {
        enable: false,
      },
      copy: {
        enable: true,
        copyright: {
          enable: false,
          limit: 50,
        },
      },
      katex: {
        enable: false,
        per_page: false,
        copytex: false,
      },
      comment: {
        use: null,
        commentBarrage: false,
        lazyload: false,
        count: false,
        avatar: "https://gravatar.com/avatar",
        hot_tip: {
          enable: true,
          count: 3,
        },
      },
      twikoo: {
        envId: "your envId",
        region: null,
        style: true,
        accessToken: null,
        option: null,
      },
      waline: {
        envId: "your envId",
        pageview: true,
        option: null,
      },
      valine: {
        appId: "your appId",
        appKey: "your appKey",
        serverURLs: "your serverURLs",
        avatar: "monsterid",
        visitor: false,
        style: true,
        option: null,
      },
      artalk: {
        server: "your server",
        site: "your site-name",
        option: null,
      },
      console: {
        enable: false,
        recentComment: {
          enable: false,
          storage: 0.2,
        },
        card: {
          tags: true,
          archive: true,
        },
      },
      verify_site: [],
      css_prefix: false,
      font: {
        "font-size": "16px",
        "code-font-size": "16px",
        "font-family":
          "PingFang SC, Hiragino Sans GB,Microsoft YaHei, sans-serif",
        "code-font-family": '"monospace", monospace',
      },
      extends: {
        head: [],
        body: [],
      },
      pwa: {
        enable: false,
        manifest: "/manifest.json",
        theme_color: "#006a73",
        mask_icon: "/img/pwa/favicon.ico",
        apple_touch_icon: "/img/pwa/favicon.ico",
        bookmark_icon: "/img/pwa/favicon.ico",
        favicon_32_32: "/img/pwa/favicon_32.ico",
        favicon_16_16: "/img/pwa/favicon_16.ico",
      },
      google_adsense: {
        enable: false,
        auto_ads: false,
        aside_card: false,
        post_card: false,
        post_content: false,
        enable_page_level_ads: false,
        js: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        client: "",
        slot: "",
      },
      right_menu: {
        enable: false,
        commentBarrage: false,
        ctrlOriginalMenu: false,
        translate: false,
        custom_list: [],
      },
      lure: {
        enable: false,
        jump: "404 Not Found",
        back: "ヾ(≧∇≦*)ゝ嘿嘿，上当了吧",
      },
      expire: {
        enable: false,
        time: 30,
        position: "top",
        text_prev: "本文已于",
        text_next: "天前过期，如果内容不符，请联系站长更新。",
      },
      background: {
        enable: false,
        dark: "https://bu.dusays.com/2023/09/29/651685ce667d1.jpg",
        light: "https://bu.dusays.com/2023/09/29/651685cc18d39.jpg",
        opacity: 0.2,
      },
      translate: {
        enable: false,
        defaultEncoding: 2,
        translateDelay: 0,
      },
      rightside: {
        enable: false,
        percent: false,
        hide: {
          enable: false,
          translate: false,
          mode: false,
          background_image: false
        },
      },
      CDN: {
        internal: "local",
        third_party: "cdnjs",
        version: true,
        custom_format:
          "//open.lightxi.com/cdnjs/ajax/libs/${cdnjs_name}/${version}/${min_cdnjs_file}",
        option: {},
      },
    };

    hexo.theme.config = { ...defaultConfig, ...hexo.theme.config };
  },
  1
);
