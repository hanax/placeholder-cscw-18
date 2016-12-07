var marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  smartLists: true,
});

// var publications = [
//   {
//     title: '',
//     author: '',
//     conference: ''
//   },
// ];

var briefs = {
  brief: marked('The full conference website is coming soon. In the meantime, we have put together this page to provide quick news and updates about CSCW 2018. Please use the form at the bottom of this page to sign up for CSCW 2018 updates -- or, follow CSCW on [Twitter](http://www.twitter.com/ACM_CSCW) and [Facebook](http://www.facebook.com/acmCSCW).'),
  news: [
    'CSCW is moving to a fall schedule. The CSCW 2018 conference will take place around early November 2018, most likely in the New York area.',
    'To bridge the year-and-a-half gap between CSCW 2017 and CSCW 2018, we will have two submission deadlines -- the first is coming soon in April/May 2017.'
  ]
};

var faqs = [
  {
    q: 'Why did CSCW move to the Fall?',
    a: '<p>This change has been considered over many years. Prior to 2010, CSCW occurred in the Fall, moving to the Spring when it became an annual conference. The Spring time frame was problematic, however, for two reasons:'
      + '<ol>'
      + '<li> There was too long a gap between when papers were submitted to the conference and when they were presented. Because the community wanted paper decisions before the CHI deadline, there was often a 5-month gap between final paper decisions and presentations, and a 9-month gap between paper submissio and presentation. </li>'
      + '<li> Through a fairly broad community survey, we have tried to assess the impact of moving to the Fall. Obvious concerns have included the overlap not only with the ECSCW and GROUP conferences, but also with UIST, UBICOMP, HCOMP, and RecSYS, among other Fall conferences. However, it turned out that our biggest overlap was with CHI, and that having CSCW and CHI in the same general time period was problematic for many. </li>'
      + '</ol> <p>'
      + 'It was the combination of the timing of submissions and representation, as well as the overlap with CHI, that drove the steering committee to present the change to a Fall timeline, and to receive enough positive feedback to make the change.'
      + '</p>'
  },
  {
    q: 'What will happen with papers submitted in 2017?',
    a: '<p>The papers will go through a normal CSCW review cycle, with accepted papers to be published online in fall of 2017.'
      + '</p> <p>'
  },
  {
    q: 'What is PACM, and what does it mean for CSCW?',
    a: '<p>PACM (Proceedings of the ACM) is shorthand for a journal series -- attached mainly to ACM special interest groups -- that will change our publication format to something more closely resembling a journal article. In general, the paper submission process and assessment ofr CSCW will remain much the same. The main difference lies in how the work will be referenced.'
      + '</p> <p>'
      + 'Most interesting is that automatic indexing services like ISI will read our work as a journal, not as a conference proceedings. This should not only heighten the visibility of work of authors in this community, but also allow for better comparability with fields outside of Computer Science. </p>'
      + '</p> <p>'
      + 'It is the intention to move all future CSCW conferences to the PACM publishing model. </p>'
  },
].map(function(n) {
  n.a = marked(n.a);
  return n;
});

var organizers = [
  {
    title: 'General co-chairs: Vanessa Evers, Mor Naaman : [chairs2018@cscw.acm.org](mailto:chairs2018@cscw.acm.org)'
  },
  {
    title: 'PC co-chairs: Laura Dabbish, Karrie Karahalios : [papers2018@cscw.acm.org](mailto:papers2018@cscw.acm.org)'
  }
].map(function(n) {
  n.title = marked(n.title);
  return n;
});

module.exports = {
//   publications: publications,
  briefs: briefs,
  faqs: faqs,
  organizers: organizers,
};
