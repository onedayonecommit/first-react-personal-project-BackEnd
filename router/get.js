const express = require('express');
const { Movie } = require('../models');

const router = express.Router()

router.get("/moviecreate", (req, res) => {
    Movie.create({
        movie_name: "사이렌",
        movie_info: "“무슨 일이 있었지......”" + "현행 입시 제도가 규정하는 미술 실기 시험은 다섯 시간. 그러나 다섯 시간 후 새벽, 그림을 완성한 아이는 수호 단 한명 뿐 다른. 아이들은 거짓말처럼 사라졌다. 그 날 밤, 무슨 일이 있었나.",
        movie_url: "https://www.youtube.com/watch?v=QxY-8QFA9QA&ab_channel=HYUNBINLEE",
        movie_genre: "하이틴 / 범죄",
        movie_actors: "",
        movie_director: "이현빈(poobin)",
        movie_poster: ""
    })
    // Movie.create({
    //     movie_name: "어디에도 없는",
    //     movie_info: "",
    //     movie_url: "https://www.youtube.com/watch?v=QxY-8QFA9QA&ab_channel=HYUNBINLEE",
    //     movie_genre: "하이틴 / 범죄",
    //     movie_actors: "",
    //     movie_director: "이현빈(poobin)",
    //     movie_poster : ""
    // })
    Movie.create({
        movie_name: "파란",
        movie_info: "영화전공인 4학년 2학기 졸업반 종수는 졸업영화보다 취업이 간절하다. 취직을 준비하던 종수는 자신이 원하던 회사의 인턴십에 합격하게 된다. 인턴십을 이수한 종수에게 입사의 기회가 주어지나 입사 조건은 4년제 대학의 졸업자 또는 졸업 예정자. 그러던 어느 날 가족의 문제, 천재지변인 코로나 펜데믹 상황으로 인해 학점에 문제가 생긴다. 과연 졸업 예정 증명서 제출 및 졸업을 할 수 있을까?",
        movie_url: "https://www.youtube.com/watch?v=cvrtBba_jSk&ab_channel=HYUNBINLEE",
        movie_genre: "드라마",
        movie_actors: "",
        movie_director: "이현빈(poobin)",
        movie_poster: ""
    })
})

module.exports = router