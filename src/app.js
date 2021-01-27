let app = new Vue({
    el: '#root',
    data: {
        imgcsspath: '../',
        imgpath: 'dist/img/',
        img:{
            sitelogo: 'logo.svg',
            small_logo: 'logo-small.svg',
            ill_1:'illustration-main.jpg',
            google: 'google-logo.svg',
            slack: 'slack-logo.svg',
            hardcore: 'hardcore.png',
            nofeed: 'nofeedback.png',
            notsafe: 'notsafe.png',
            before: 'before.png',
            light: 'lightweight.png',
            sifeed: 'feedbacksuggestions.png',
            safe: 'safe.png',
            after: 'after.png',
            feedback: 'employee-feedback.jpg',
            communication: 'communication.jpg',
            survey: 'employee-survey.jpg',
            insights: 'insights.jpg',
            em_review: 'performance-review.jpg',
            review: 'review.jpg',
            em_survey: 'employee-survey.jpg',
            recognition: 'recognition.jpg',
            chat: 'chat.svg',
            happy: 'happy.svg',
            face_1: 'alex.png',
            face_2:'bohdan.png',
        },
        chat:{
            value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, consequuntur laborum inventore soluta qui quae eum accusantium autem culpa necessitatibus aspernatur? Ex incidunt voluptates quas officia nemo dolor odit dicta suscipit vitae ad in amet aperiam culpa reiciendis veritatis dignissimos corporis eligendi perferendis cum, saepe earum temporibus consequatur alias sed? Quibusdam enim suscipit error voluptatibus esse eos quo molestiae quos, dolorem repudiandae doloribus numquam. Quam voluptatum voluptates, dicta ad, tempora rem at odio, consequuntur aperiam animi obcaecati. Doloribus quam vero quod natus sequi, perspiciatis impedit expedita incidunt culpa ad, sint ipsum optio numquam dolorum harum voluptate cumque vel nisi architecto placeat! Quam assumenda architecto distinctio minima repudiandae voluptatibus nostrum. Quae, fuga ratione. Porro ullam voluptate a ex iusto velit repudiandae quasi, vero eum ipsam maxime? Quasi optio natus ducimus autem quas ea ipsam tenetur, neque adipisci unde assumenda harum quis enim earum quod laboriosam provident voluptate cum? Impedit asperiores repellendus unde omnis dignissimos, ullam eum consequatur similique minima reiciendis officiis sed? Quam eveniet doloremque qui molestiae expedita. Rem molestias tempore odio doloribus perspiciatis excepturi, modi dicta rerum architecto repellat, harum voluptatem commodi. Esse numquam odit, ex nemo, veniam dignissimos quod dolorem nihil iste molestiae in placeat libero excepturi ea minima.'
        },
        menu:{
            product: [
                'feedback',
                'surveys',
                'reviews',
                'praise',
                'slack',
                'integration',
                'schedule a demo',
                'pricing'
            ], 
            about:[
                'feedback',
                'surveys',
                'reviews',
                'praise'
            ],
            connect:[
                'feedback',
                'surveys',
                'reviews',
                'praise'
            ],
            lobs:[
                'feedback',
                'surveys',
                'reviews',
                'praise'
            ],
            fromtheblog:[
                'how to change your company culture: a four-step framework',
                'how teams can be more productive by killing 8-hour workday',
                'how to build high performing teams inspired by nature',
                'view all'
            ],
        },
        windowWidth: null,
        showmenu: false,
    },

    computed: {},
    methods: {
        menushow: function(){
            if(this.showmenu === true){
                this.showmenu = false;
            }
            else{
                this.showmenu = true;
            }
        },
    },
    mounted() {
        window.addEventListener('resize', () => {
            return this.windowWidth = window.innerWidth;
        });

    },
});