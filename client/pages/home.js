const html = require('choo/html')
const css = require('sheetify')
const datIcons = require('dat-icons')
const homeSection = require('../components/home-section')
const sponsors = require('../elements/home/sponsors')
const callout = require('../components/callout')
const cta = require('../components/cta-btn')
const header = require('../elements/header')
const footer = require('../elements/footer')

const splash = css`
  :host {
    background-repeat: no-repeat;
    background-position: center 225px;
    background-image: url("/public/img/bg-landing-page.svg");
  }

  :host > svg {
    width: inherit;
    height: inherit;
  }

  @media screen and (min-width: 30em) {
    /* ns - not small breakpoint from tachyons */
    background-position: center 175px;
  }
`

module.exports = function (state, emit) {
  emit(state.events.DOMTITLECHANGE, 'dat:// — a peer-to-peer protocol')

  return html`
    <body>
      ${header()}
    <div>
      <div class="${splash} mh2 mh4-l center contain">
        <section class="tc pa3 pt5-ns">
          <h1 class="f2 f1-l mb0 lh-title">
            <span class="color-green">dat://</span> — 点对点协议
          </h1>
          <h2 class="f3 mt3 mb3 color-neutral-50 fw4">
           一个由社区驱动的旨在为下一代Web提供支持的项目
          </h2>
          <div class="w-100 mt5">
            <img class="center h4" src="/public/img/dat-logo.png" alt="Dat Project">
          </div>
          ${callout(state, emit)}
        </section>
      </div>
      ${homeSection({
    'bgColor': 'bg-neutral',
    'title': '关于Dat的更多信息...',
    'subtitle': `
       网络的核心部分塑造了我们现在沟通和组织的方式。 然而, 这些部分越来越多地受到大型垄断企业的控制。 在构建Dat的过程中， 我们设计了一个面向未来的由非营利组织支持，由社区驱动的工具。
        `,
    'sections': [
      {
        'title': '什么是Web协议？',
        'text': '无论你是否知道, 你至少每天都在使用一个网络协议 - HTTP！ 与HTTP类似, Dat协议使用 Internet 在计算机之间传输数据（还有更多内容，请继续阅读！）。 Dat利用现有的基础架构，同时使Web更加以用户为核心。'
      },
      {
        'title': '谁在负责 Dat 项目?',
        'text': `
            Dat是一个开源项目，通过工作组进行社区治理。 Dat主要由捐赠和赞助支持， 并由美国非营利组织<a href="https://codeforscience.org/">Code for Science＆Society</a>赞助。`
      },
      {
        'title': '为什么要创建一个新的协议?',
        'text': '下一代网络包含共同的公共和私人场所, 而不向广告商出售数据。 Dat最初是为研究数据而设计的，它在现有网络上构建，同时提供更多用户控制。Dat允许用户直接共享并建立数字协作的新模型。'
      }
    ],
    cta: cta(state, emit, {
      id: 'docs-cta',
      href: 'https://docs.datproject.org.cn',
      text: '阅读更多关于Dat的信息',
      klass: 'f5 white bg-animate bg-green hover-bg-dark-green pa3 link'
    })
  })}
      ${sponsors({
    klass: 'bg-neutral-04',
    cta: cta(state, emit, {
      id: 'donate-cta',
      href: 'https://donate.datproject.org',
      text: 'Donate Today',
      klass: 'no-underline f4 tc db w-100 pv3 bg-animate bg-green hover-bg-dark-green white'
    })
  })}
      ${homeSection({
    'bgColor': 'bg-neutral',
    'title': '谁在使用 Dat?',
    'subtitle': `
          Dat最初设计用于共享和归档研究数据，现在被各种各样的社区使用
        `,
    'sections': [
      {
        'title': '研究人员',
        'text': '通过在 <a href="https://blog.datproject.org/tag/science/">实验室</a>使用Dat， 我们在现有的研究人员工作流程中找到了Dat的位置，从基本数据共享到可重现的容器。 我们将继续与研究人员和图书馆合作，以确定Dat在研究中的更多重要用途。'
      },
      {
        'title': '创作者',
        'text': `
              诸如 <a href="https://dat.land">Beaker Browser</a>类的应用程序, 使发布网站和共享Dat链接变得如此简单。 提供真正的一键式发布而无需运营数据, 创作者可以被授权与他们的社区共享。我们设想围绕以用户为中心的出版开发的未来生态系统。
            `
      },
      {
        'title': '活动家',
        'text': '现代Web应用程序是在假设在线的基础上构建的 with the assumption of connectivity. This is not true for many parts of the world, in disaster situations, and in cases where surveillance is a concern. Dat-based applications are designed to work offline and online, without bias.'
      }
    ],
    cta: cta(state, emit, {
      id: 'docs-cta',
      href: 'https://dat.land',
      text: 'Explore More on Dat.Land',
      klass: 'f5 white bg-animate bg-green hover-bg-dark-green pa3 link'
    })
  })}
      ${homeSection({
    'title': '努力实现价值驱动的技术',
    'subtitle': `
          Along the way of building the web we got lost.
          We need technology driven by communities & built for public well-being.
        `,
    'sections': [
      {
        'title': 'Community First',
        'text': `
              We believe not-for-profit and community-driven technology will make the future of the web more inclusive.
              To build that future, we must develop with communities not served by the current monopoly-driven system.
            `
      },
      {
        'title': 'Transparent Funding',
        'text': `
              We believe digital tools we rely on for community organization &  communication should be transparently funded and operated. Dat Project aims to be <a href="https://github.com/datproject/organization" target="_blank" class="link">transparent</a> about funding and the process of fundraising.
            `
      },
      {
        'title': 'Open Governance',
        'text': `
            At the scale of the web, every decision can have a massive impact on our political systems, social well-being, and the future of humanity. We believe these decisions should not be made by private groups aiming to increase profits. Dat Project runs openly through a series of <a
            target="_blank"
            class="link"
            href="/about#team"
            >working groups</a>.
            `
      }
    ],
    cta: cta(state, emit, {
      id: 'blog-cta',
      href: 'https://blog.datproject.org',
      text: 'Learn More on Dat Blog',
      klass: 'f5 white bg-animate bg-green hover-bg-dark-green pa3 link'
    })
  })}
    </div>
      ${footer()}
      ${datIcons()}
    </body>
  `
}
