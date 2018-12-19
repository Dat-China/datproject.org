const html = require('choo/html')
const datIcons = require('dat-icons')
const team = require('../elements/team')
const header = require('../elements/header')
const footer = require('../elements/footer')

module.exports = function (state, emit) {
  const wrapper = 'mw8-ns center-ns pv4 ph3 ph0-l'
  const copyClass = 'f4 lh-copy measure'
  const headClass = 'f4 measure-narrow'
  emit(state.events.DOMTITLECHANGE, 'About Dat Project')

  return html`
    <body>
      ${header()}
    <div>
      <section class="${wrapper}">
        <header class="">
          <h1 class="f2 horizontal-rule">关于 Dat</h1>
        </header>
        <article class="">
          <p class="${copyClass}">
            Dat是一个非营利组织支持的技术社区，也是一个用于构建面向未来的应用程序的开放协议。 Dat Project设想了一个由全球社区在开放和安全协议上创建的公共网络。我们着手改进对公共数据的访问，并在此过程中创建了一个新协议。 请在 <a href="https://www.datprotocol.com">datprotocol.com</a>上阅读协议的更多内容。  在我们开发Dat的工作中, 我们发现了一个不太受重视的需求。 分散式的软件有可能将数字信息的控制权交还给人们。 如今, 构建点对点的应用程序既带来了技术挑战，也带来了道德挑战。 但是Dat正在慢慢改变这些。
          </p>
          <p class="${copyClass}">
            为了鼓励人们使用分散式的技术来进行试验和创新， 我们的目标是为点对点应用程序构建Dat基础软件 – 由一个由任务驱动的非营利组织赞助的应用程序。为了实现这一未来， 我们致力于让Dat专注于支持点对点应用的核心需求。 我们希望, 通过这些小而关键的重点, 为Dat生态体系 构建一个个强大的基础模块。
          </p>
          <p class="${copyClass}">
            Dat的第一行代码<a href="https://github.com/datproject/dat/commit/e5eda57b53f60b05c0c3d97da90c10cd17dcbe19">完成于2013年8月17日。纵观其历史，Dat主要关注公共数据和研究中的数据的共享，最近才更广泛地关注更普遍的分散式应用. Dat几乎完全由私有基金会资助, <a href="https://blog.datproject.org/2017/09/15/dat-funding-history"/>了解更多的资金历史。</a>.
          </p>
          <h2 class="${headClass}">
            支持者
          </h2>
          <p class="${copyClass}">
            项目是由<a href="http://codeforscience.org">Code for Science & Society</a>赞助, 一个 <span class="nowrap">U.S. 501(c)(3)</span> 非盈利组织。 我们也获得了 <a href="https://knightfoundation.org/">Knight Foundation</a>,  <a href="https://sloan.org/">Alfred P. Sloan Foundation</a>, 以及 <a href="https://www.moore.org/">Gordon and Betty Moore Foundation</a>的资助。
          </p>
        </article>
      </section>
      <section class="bg-neutral-04">
        <div class="${wrapper}" id="team">
          ${team()}
        </div>
      </section>
    </div>
      ${footer()}
      ${datIcons()}
    </body>
  `
}
