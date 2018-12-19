const html = require('choo/html')
const cta = require('./cta-btn')

module.exports = function (state, emit) {
  return html`
    <div class="mt3 mw8 center tl flex flex-row-ns flex-column w-100">
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4-ns mv2 mh3-l mh1-ns pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center">
            <svg><use xlink:href="#daticon-star-dat"/></svg>
          </div>
          <h4 class="f4 mb0 tc">文档</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            了解Dat
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>命令行:</b> 安装并学习如何使用Dat命令行。
            </li>
            <li class="f5 mb2">
              <b>Javascript APIs:</b> 使用Node.js中构建点对点应用程序。
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
  ${cta(state, emit, {
    href: 'https://docs.datproject.org.cn',
    klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
    text: '开始入门',
    id: 'docs'
  })}
          </p>
        </div>
      </div>
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4-ns mv2 mh3-l mh1-ns pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-network"/></svg></div>
          <h4 class="f4 mb0 tc">Dat 生态</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            社区应用和工具
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>社区驱动:</b> 了解更多基于dat构建的应用
            </li>
            <li class="f5 mb2">
              <b>应用程序:</b> 了解 <a href="https://beakerbrowser.com/">Beaker Browser</a>, <a href="https://github.com/dat-land/dat-desktop">Dat Desktop</a>, 和<a href="https://dat.land/">更多</a>其他应用.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            ${cta(state, emit,
    {
      href: 'https://dat.land',
      klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
      text: '探索 Dat Land',
      id: 'dat-land'
    })}
          </p>
        </div>
      </div>
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4-ns mv2 mh3-l mh1-ns pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-happy-dat"/></svg></div>
          <h4 class="tc f4 mb0">Dat 协议</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            Dat 是如何工作的？
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>协议规范:</b> 了解Dat协议及其工作原理。
            </li>
            <li class="f5 mb2">
              <b>工作组:</b> 了解我们的社区是如何创建Dat协议的。
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            ${cta(state, emit, {
    href: 'https://datprotocol.com',
    klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
    text: '协议规范',
    id: 'dat-protocol'
  })}
          </p>
        </div>
      </div>
    </div>
  `
}
