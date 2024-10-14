<style lang="scss" scoped></style>

<template>
  <div h-full of-y-auto px-6>
    <div ma prose>
      <div>
        <h2>
          介绍
        </h2>

        <div mt-6>
          <p>
            <span>introxd 是一个</span>
            <span font-bold> 个人简介 </span>
            <span>网站，尽可能的定制你的想法</span>
          </p>
        </div>
      </div>

      <div>
        <h2>
          提供
        </h2>

        <ul mt-6>
          <li>
            <p font-bold>
              部署服务
            </p>
            <div flex="~ wrap" items-center>
              <div>简介将会部署在</div>
              <IxIconText href="https://introxd.com" icon-class="i-material-symbols-light-link size-6">
                introxd.com
              </IxIconText>
              <IxIconText href="https://introxd.pages.dev" icon-class="i-material-symbols-light-link size-6">
                introxd.pages.dev
              </IxIconText>
              <IxIconText href="https://introxd.nuxt.dev" icon-class="i-material-symbols-light-link size-6">
                introxd.nuxt.dev
              </IxIconText>
            </div>
          </li>

          <li>
            <p font-bold>
              自托管
            </p>
            <div flex="~ wrap" items-center>
              <div>提供 Docker 镜像</div>
              <IxIconText href="https://hub.docker.com/repository/docker/imba97/introxd/general" icon-class="i-logos-docker-icon size-5.5">
                imba97/introxd
              </IxIconText>
              <div>可以设置自己的首屏页面</div>
            </div>
          </li>

          <li>
            <p font-bold>
              长期维护
            </p>
            <p>免费修改文字、图标、图片，不改变排版的基础上增删多行文字</p>
          </li>

          <li>
            <p font-bold>
              一定的宣传作用
            </p>
            <p>本站首页会随机展示简介，可能会起到一定的宣传作用</p>
          </li>
        </ul>
      </div>

      <div>
        <h2>
          适合的用户
        </h2>

        <div mt-6>
          <p line-through>
            有钱且情绪稳定（bushi）
          </p>
          <p>你有一个主业或副业，艺术设计、手工、表演、写作等</p>
          <p>你需要一个可随时随地快速分享的简介页面，用于展示个人技能、作品、联系方式等</p>
        </div>
      </div>

      <div>
        <h2>
          其他说明
        </h2>

        <div mt-6>
          <p>不保证接口服务一定长期维护，如果目标接口有修改，在能更新的情况下尽量更新维护</p>
        </div>
      </div>
    </div>

    <div mb-8 text="sm center gray-3">
      根据反馈再补充
    </div>
  </div>
</template>
