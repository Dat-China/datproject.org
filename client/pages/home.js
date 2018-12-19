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
  emit(state.events.DOMTITLECHANGE, 'dat:// — 一个点对点协议')

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
        'text': '无论你是否知道, 你至少每天都在使用一个网络协议 - 那就是HTTP！ 与HTTP类似, Dat协议使用互联网在计算机之间传输数据（dat不限于此，请继续阅读！）。 Dat利用现有的基础架构，推进互联网的用户中心化。'
      },
      {
        'title': '谁在负责 Dat 项目?',
        'text': `
            Dat是一个开源项目，通过工作组进行社区治理。 Dat主要由美国非营利组织Code for Science & Society捐赠和赞助支持<a href="https://codeforscience.org/">Code for Science＆Society</a>赞助。`
      },
      {
        'title': '为什么要创建一个新的协议?',
        'text': '下一代互联网的社区包含公共空间与私人空间， 而且不需要向服务提供商卖数据。Dat是为数据研究而设计的，它基于已有的互联网构建，同时为用户提供更多控制权。Dat允许用户直接地分享数据并支持可以支持用户构建新的数字协作模式。'
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
        'text': '通过 <a href="https://blog.datproject.org/tag/science/">Dat in the lab</a>项目， 我们在研究人员现有的工作流程中找到了Dat的定位，从基本数据共享到可复制的容器。 我们将继续与研究人员和图书馆合作，以发掘Dat在研究中更有影响力的用途。'
      },
      {
        'title': '创作者',
        'text': `
              诸如 <a href="https://dat.land">Beaker Browser</a>这类应用程序, 使发布数据就像创建网站和共享Dat链接一样简单。 提供真正的一键式发布而无需出卖数据, 创作者可以在他们的社区中共享。我们构想了一个以用户为中心开发的未来生态系统。
            `
      },
      {
        'title': '活动家',
        'text': '现代Web应用程序是以连通性为前提构建的。但是在世界上的一些地方网络无法连通，比如灾区或一些监视严密的地区。而Dat的应用联网状态与脱机状态都可以使用。'
      }
    ],
    cta: cta(state, emit, {
      id: 'docs-cta',
      href: 'https://dat.land',
      text: '到Dat.Land了解更多',
      klass: 'f5 white bg-animate bg-green hover-bg-dark-green pa3 link'
    })
  })}
      ${homeSection({
    'title': '力求实现价值驱动的技术',
    'subtitle': `
          我们在构建互联网的路上迷路了。
          我们需要社区驱动的技术，我们需要为公众福祉而生的技术。
        `,
    'sections': [
      {
        'title': '社区优先',
        'text': `
              我们相信，非营利和社区驱动的技术将使网络的未来更具包容性。
              为了建立这样的未来，我们必须与不受当前垄断驱动体系服务的社区一起发展。
            `
      },
      {
        'title': '资金透明',
        'text': `
              我们坚信我们所依赖的数字工具应该被透明地资助 。Dat project应该在受资助与筹集资助的过程保持 <a href="https://github.com/datproject/organization" target="_blank" class="link">透明度</a>。
            `
      },
      {
        'title': '开放治理',
        'text': `
            在互联网中，每一个决定都会对我们的政治制度、社会福利和人类的未来产生巨大的影响。我们认为，这些决定不应由旨在增加利润的私人团体作出。DAT项目通过一系列<a
            target="_blank"
            class="link"
            href="/about#team"
            >working groups</a>实现公开运作。
            `
      }
    ],
    cta: cta(state, emit, {
      id: 'blog-cta',
      href: 'https://blog.datproject.org',
      text: '到Dat Blog了解更多',
      klass: 'f5 white bg-animate bg-green hover-bg-dark-green pa3 link'
    })
  })}
    </div>
      ${footer()}
      ${datIcons()}
    </body>
  `
}
