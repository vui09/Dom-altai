<template>
  <HeaderBlock :active-mobile-menu="activeMenuMobile" @toggleMenu="onToggleMenu"/>
  <PromoBlock/>
  <AboutProject/>
  <QuestionsBlock/>
  <TeamBlock/>
  <ProgressBlock/>
  <EventsBlock/>
  <ResultBlock :results="results"/>
  <FormBlock/>
  <FooterBlock/>
  <MobileMenu :active-mobile-menu="activeMenuMobile"/>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock'
import PromoBlock from '@/components/PromoBlock'
import AboutProject from '@/components/AboutProject'
import QuestionsBlock from '@/components/QuestionsBlock'
import TeamBlock from '@/components/TeamBlock'
import ProgressBlock from '@/components/ProgressBlock'
import EventsBlock from '@/components/EventsBlock'
import ResultBlock from '@/components/ResultBlock'
import FormBlock from '@/components/FormBlock'
import FooterBlock from '@/components/FooterBlock'
import MobileMenu from '@/components/MobileMenu'
import menuScript from '@/modules/menu-script'


export default {
  name: 'App',
  components: {
    ProgressBlock,
    HeaderBlock,
    QuestionsBlock,
    PromoBlock,
    AboutProject,
    TeamBlock,
    EventsBlock,
    ResultBlock,
    FormBlock,
    FooterBlock,
    MobileMenu
  },
  data () {
    return {
      results: [
        { title: 'Предпроектная аналитика', date: '31.10.22', desc: 'Отчет по итогам деятельности' },
        { title: 'Результаты опросов и встреч с жителями', date: '01.11.22', desc: 'Отчет по итогам деятельности' },
        { title: 'Предварительное проектное предложение', date: '22.12.22', desc: 'Отчет по итогам деятельности' },
        { title: 'Итоговый вариант проекта', date: '22.12.22', desc: 'Отчет по итогам деятельности' }
      ],
      activeMenuMobile: false
    }
  },
  methods: {
    onToggleMenu(isOpen) {
      this.activeMenuMobile = isOpen

    }
  },
  mounted () {
    menuScript ()
  }
}

</script>

<style lang="scss">

</style>
