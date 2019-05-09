import { Result } from "./types";

export default {
  intents: {
    __qna__8bvcao9fvw_cafeteria_address: {
      tp: 6,
      fp: 3,
      fn: 5,
      samples: 11,
      confusions: {
        __qna__uowl4857g0_who_are_you: 1,
        none: 3,
        find_presentation_time: 1
      },
      precision: 0.6666666666666666,
      recall: 0.5454545454545454,
      f1: 0.6
    },
    none: {
      tp: 3,
      fp: 198,
      fn: 0,
      samples: 3,
      confusions: {},
      precision: 0.014925373134328358,
      recall: 1,
      f1: 0.029411764705882353
    },
    find_presentation_time: {
      tp: 5,
      fp: 39,
      fn: 5,
      samples: 10,
      confusions: {
        none: 5
      },
      precision: 0.11363636363636363,
      recall: 0.5,
      f1: 0.18518518518518517
    },
    what_is_for_lunch: {
      tp: 12,
      fp: 9,
      fn: 16,
      samples: 28,
      confusions: {
        none: 12,
        __qna__4o9xld2i5e_when_is_the_conference_starting: 1,
        find_restaurants: 1,
        find_upcoming_session: 1,
        __qna__8bvcao9fvw_cafeteria_address: 1
      },
      precision: 0.5714285714285714,
      recall: 0.42857142857142855,
      f1: 0.48979591836734687
    },
    find_upcoming_session: {
      tp: 8,
      fp: 8,
      fn: 6,
      samples: 14,
      confusions: {
        none: 5,
        find_rooms: 1
      },
      precision: 0.5,
      recall: 0.5714285714285714,
      f1: 0.5333333333333333
    },
    __qna__4o9xld2i5e_when_is_the_conference_starting: {
      tp: 2,
      fp: 4,
      fn: 5,
      samples: 7,
      confusions: {
        what_is_for_lunch: 1,
        find_presentation_time: 1,
        none: 3
      },
      precision: 0.3333333333333333,
      recall: 0.2857142857142857,
      f1: 0.30769230769230765
    },
    __qna__uowl4857g0_who_are_you: {
      tp: 3,
      fp: 11,
      fn: 5,
      samples: 8,
      confusions: {
        none: 5
      },
      precision: 0.21428571428571427,
      recall: 0.375,
      f1: 0.2727272727272727
    },
    find_restaurants: {
      tp: 15,
      fp: 4,
      fn: 2,
      samples: 17,
      confusions: {
        none: 1,
        __qna__loae2kr0wz_are_there_any_coffee_cafes_close_by_the_bank: 1
      },
      precision: 0.7894736842105263,
      recall: 0.8823529411764706,
      f1: 0.8333333333333333
    },
    __qna__lpvecghkxy_how_are_you: {
      tp: 1,
      fp: 2,
      fn: 5,
      samples: 6,
      confusions: {
        none: 2,
        __qna__uowl4857g0_who_are_you: 2,
        __qna__vbuwo35be4_hello: 1
      },
      precision: 0.3333333333333333,
      recall: 0.16666666666666666,
      f1: 0.2222222222222222
    },
    __qna__vbuwo35be4_hello: {
      tp: 5,
      fp: 4,
      fn: 4,
      samples: 9,
      confusions: {
        none: 3,
        find_upcoming_session: 1
      },
      precision: 0.5555555555555556,
      recall: 0.5555555555555556,
      f1: 0.5555555555555556
    },
    find_rooms: {
      tp: 0,
      fp: 6,
      fn: 6,
      samples: 6,
      confusions: {
        find_presentation_time: 3,
        none: 3
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    find_keynote: {
      tp: 0,
      fp: 1,
      fn: 8,
      samples: 8,
      confusions: {
        find_presentation_time: 2,
        none: 5,
        find_upcoming_session: 1
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    __qna__6dr2lksqs1_what_do_i_do_when_i_arrive_to_the_bank_on_the_firs: {
      tp: 0,
      fp: 3,
      fn: 5,
      samples: 5,
      confusions: {
        none: 5
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    __qna__loae2kr0wz_are_there_any_coffee_cafes_close_by_the_bank: {
      tp: 1,
      fp: 1,
      fn: 4,
      samples: 5,
      confusions: {
        none: 2,
        find_restaurants: 1,
        __qna__8bvcao9fvw_cafeteria_address: 1
      },
      precision: 0.5,
      recall: 0.2,
      f1: 0.28571428571428575
    },
    __qna__cgib3mkwfm_what_time_does_the_summit_start_on_wednesday: {
      tp: 0,
      fp: 1,
      fn: 5,
      samples: 5,
      confusions: {
        none: 3,
        __qna__4o9xld2i5e_when_is_the_conference_starting: 2
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    __qna__e9wjqznp11_conference_rooms_located: {
      tp: 3,
      fp: 1,
      fn: 3,
      samples: 6,
      confusions: {
        none: 3
      },
      precision: 0.75,
      recall: 0.5,
      f1: 0.6
    },
    __qna__q4wiuc5bhj_you_are_annoying: {
      tp: 1,
      fp: 1,
      fn: 5,
      samples: 6,
      confusions: {
        find_presentation_time: 1,
        none: 4
      },
      precision: 0.5,
      recall: 0.16666666666666666,
      f1: 0.25
    },
    __qna__upk42qxgjj_can_i_bring_my_laptop: {
      tp: 3,
      fp: 0,
      fn: 2,
      samples: 5,
      confusions: {
        none: 2
      },
      precision: 1,
      recall: 0.6,
      f1: 0.7499999999999999
    },
    __qna__18gqb13vuq_redbud: {
      tp: 7,
      fp: 0,
      fn: 3,
      samples: 10,
      confusions: {
        none: 1,
        __qna__e9wjqznp11_conference_rooms_located: 1,
        find_presentation_time: 1
      },
      precision: 1,
      recall: 0.7,
      f1: 0.8235294117647058
    },
    __qna__ai54l1922m_how_long_are_the_breaks: {
      tp: 2,
      fp: 0,
      fn: 3,
      samples: 5,
      confusions: {
        none: 3
      },
      precision: 1,
      recall: 0.4,
      f1: 0.5714285714285715
    },
    __qna__g867oj8hrh_can_you_tell_me_the_summit_goal: {
      tp: 2,
      fp: 0,
      fn: 3,
      samples: 5,
      confusions: {
        find_upcoming_session: 1,
        none: 2
      },
      precision: 1,
      recall: 0.4,
      f1: 0.5714285714285715
    },
    __qna__mewcp633ps_who_are_participants_of_the_summit: {
      tp: 2,
      fp: 0,
      fn: 5,
      samples: 7,
      confusions: {
        none: 4,
        find_keynote: 1
      },
      precision: 1,
      recall: 0.2857142857142857,
      f1: 0.4444444444444445
    },
    __qna__8lnqy9jzk2_thank_you: {
      tp: 3,
      fp: 0,
      fn: 5,
      samples: 8,
      confusions: {
        find_presentation_time: 1,
        none: 3,
        __qna__uowl4857g0_who_are_you: 1
      },
      precision: 1,
      recall: 0.375,
      f1: 0.5454545454545454
    },
    __qna__3kg9c3llzj_is_there_a_room_i_can_use_for_work: {
      tp: 3,
      fp: 0,
      fn: 2,
      samples: 5,
      confusions: {
        none: 2
      },
      precision: 1,
      recall: 0.6,
      f1: 0.7499999999999999
    },
    generic_conference: {
      tp: 2,
      fp: 0,
      fn: 1,
      samples: 3,
      confusions: {
        none: 1
      },
      precision: 1,
      recall: 0.6666666666666666,
      f1: 0.8
    },
    __qna__cvu54pesjh_is_there_a_printer_i_can_access: {
      tp: 2,
      fp: 0,
      fn: 6,
      samples: 8,
      confusions: {
        none: 4,
        __qna__uowl4857g0_who_are_you: 1,
        __qna__lpvecghkxy_how_are_you: 1
      },
      precision: 1,
      recall: 0.25,
      f1: 0.4
    },
    __qna__pn3wbj7lv3_what_bank_entrance_should_i_use: {
      tp: 2,
      fp: 0,
      fn: 3,
      samples: 5,
      confusions: {
        none: 3
      },
      precision: 1,
      recall: 0.4,
      f1: 0.5714285714285715
    },
    __qna__9b9u6spfqz_weather: {
      tp: 2,
      fp: 0,
      fn: 2,
      samples: 4,
      confusions: {
        none: 2
      },
      precision: 1,
      recall: 0.5,
      f1: 0.6666666666666666
    },
    __qna__dnyp6jmmw3_atlanta_bank_address: {
      tp: 1,
      fp: 0,
      fn: 5,
      samples: 6,
      confusions: {
        none: 2,
        __qna__6dr2lksqs1_what_do_i_do_when_i_arrive_to_the_bank_on_the_firs: 3
      },
      precision: 1,
      recall: 0.16666666666666666,
      f1: 0.2857142857142857
    },
    __qna__dra330w1ys_tell_me_a_joke: {
      tp: 2,
      fp: 0,
      fn: 4,
      samples: 6,
      confusions: {
        none: 4
      },
      precision: 1,
      recall: 0.3333333333333333,
      f1: 0.5
    },
    transportation_options: {
      tp: 2,
      fp: 0,
      fn: 12,
      samples: 14,
      confusions: {
        find_presentation_time: 5,
        none: 7
      },
      precision: 1,
      recall: 0.14285714285714285,
      f1: 0.25
    },
    __qna__e8jlnglxdk_where_do_i_get_a_name_tag: {
      tp: 3,
      fp: 0,
      fn: 2,
      samples: 5,
      confusions: {
        find_presentation_time: 1,
        none: 1
      },
      precision: 1,
      recall: 0.6,
      f1: 0.7499999999999999
    },
    __qna__wbozg48loh_does_future_state_of_program_and_project_managemen: {
      tp: 3,
      fp: 0,
      fn: 3,
      samples: 6,
      confusions: {
        none: 3
      },
      precision: 1,
      recall: 0.5,
      f1: 0.6666666666666666
    },
    __qna__5j1zdl289a_what_are_the_cafeteria_s_hours: {
      tp: 3,
      fp: 0,
      fn: 4,
      samples: 7,
      confusions: {
        none: 3,
        what_is_for_lunch: 1
      },
      precision: 1,
      recall: 0.42857142857142855,
      f1: 0.6
    },
    __qna__5fslwaub8w_how_early_can_i_arrive_before_the_summit: {
      tp: 1,
      fp: 0,
      fn: 4,
      samples: 5,
      confusions: {
        none: 4
      },
      precision: 1,
      recall: 0.2,
      f1: 0.33333333333333337
    },
    end_of_day: {
      tp: 2,
      fp: 0,
      fn: 7,
      samples: 9,
      confusions: {
        none: 5,
        __qna__4o9xld2i5e_when_is_the_conference_starting: 1,
        find_presentation_time: 1
      },
      precision: 1,
      recall: 0.2222222222222222,
      f1: 0.3636363636363636
    },
    __qna__dgso97fzor_what_are_the_tracks: {
      tp: 2,
      fp: 0,
      fn: 3,
      samples: 5,
      confusions: {
        find_rooms: 1,
        none: 2
      },
      precision: 1,
      recall: 0.4,
      f1: 0.5714285714285715
    },
    biography: {
      tp: 2,
      fp: 0,
      fn: 7,
      samples: 9,
      confusions: {
        none: 4,
        find_presentation_time: 3
      },
      precision: 1,
      recall: 0.2222222222222222,
      f1: 0.3636363636363636
    },
    __qna__lhiniin2bx_theme: {
      tp: 2,
      fp: 0,
      fn: 3,
      samples: 5,
      confusions: {
        none: 2,
        find_upcoming_session: 1
      },
      precision: 1,
      recall: 0.4,
      f1: 0.5714285714285715
    },
    findAbstract: {
      tp: 1,
      fp: 0,
      fn: 4,
      samples: 5,
      confusions: {
        none: 3,
        find_presentation_time: 1
      },
      precision: 1,
      recall: 0.2,
      f1: 0.33333333333333337
    },
    __qna__76k26cucsv_closest_hotel_recommended: {
      tp: 2,
      fp: 0,
      fn: 3,
      samples: 5,
      confusions: {
        none: 3
      },
      precision: 1,
      recall: 0.4,
      f1: 0.5714285714285715
    },
    __qna__z8keihp6ir_presentation_slides: {
      tp: 3,
      fp: 0,
      fn: 5,
      samples: 8,
      confusions: {
        __qna__8bvcao9fvw_cafeteria_address: 1,
        none: 4
      },
      precision: 1,
      recall: 0.375,
      f1: 0.5454545454545454
    },
    __qna__dsfjarwoeq_what_to_wear_at_conference: {
      tp: 1,
      fp: 0,
      fn: 4,
      samples: 5,
      confusions: {
        none: 3,
        find_presentation_time: 1
      },
      precision: 1,
      recall: 0.2,
      f1: 0.33333333333333337
    },
    __qna__7j7p4abm3j_toilet: {
      tp: 2,
      fp: 0,
      fn: 4,
      samples: 6,
      confusions: {
        none: 3,
        find_restaurants: 1
      },
      precision: 1,
      recall: 0.3333333333333333,
      f1: 0.5
    },
    __qna__i426x8gj3q_who_created_you: {
      tp: 4,
      fp: 0,
      fn: 3,
      samples: 7,
      confusions: {
        none: 1,
        __qna__uowl4857g0_who_are_you: 2
      },
      precision: 1,
      recall: 0.5714285714285714,
      f1: 0.7272727272727273
    },
    __qna__67e6rlkoh3_bridgette: {
      tp: 2,
      fp: 0,
      fn: 3,
      samples: 5,
      confusions: {
        __qna__vbuwo35be4_hello: 1,
        none: 2
      },
      precision: 1,
      recall: 0.4,
      f1: 0.5714285714285715
    },
    __qna__7q7xsrhd75_do_i_wait_for_someone_to_walk_me_in: {
      tp: 1,
      fp: 0,
      fn: 4,
      samples: 5,
      confusions: {
        none: 4
      },
      precision: 1,
      recall: 0.2,
      f1: 0.33333333333333337
    },
    find_workshops: {
      tp: 1,
      fp: 0,
      fn: 10,
      samples: 11,
      confusions: {
        none: 6,
        find_presentation_time: 3,
        find_upcoming_session: 1
      },
      precision: 1,
      recall: 0.09090909090909091,
      f1: 0.16666666666666669
    },
    __qna__7nhj7kwn73_airport_address: {
      tp: 1,
      fp: 0,
      fn: 4,
      samples: 5,
      confusions: {
        none: 4
      },
      precision: 1,
      recall: 0.2,
      f1: 0.33333333333333337
    },
    __qna__1b9pouhuk0_conference_center_location: {
      tp: 1,
      fp: 0,
      fn: 4,
      samples: 5,
      confusions: {
        none: 4
      },
      precision: 1,
      recall: 0.2,
      f1: 0.33333333333333337
    },
    __qna__blvoh16r9x_networking_event: {
      tp: 1,
      fp: 0,
      fn: 7,
      samples: 8,
      confusions: {
        find_presentation_time: 3,
        find_restaurants: 1,
        find_rooms: 1,
        none: 2
      },
      precision: 1,
      recall: 0.125,
      f1: 0.2222222222222222
    },
    __qna__i7x5pi5rk4_do_you_have_a_hobby: {
      tp: 1,
      fp: 0,
      fn: 4,
      samples: 5,
      confusions: {
        __qna__uowl4857g0_who_are_you: 3,
        none: 1
      },
      precision: 1,
      recall: 0.2,
      f1: 0.33333333333333337
    },
    __qna__6u9mhsgp5q_what_is_for_snacks: {
      tp: 0,
      fp: 0,
      fn: 6,
      samples: 6,
      confusions: {
        what_is_for_lunch: 4,
        none: 1,
        find_presentation_time: 1
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    find_track: {
      tp: 0,
      fp: 0,
      fn: 10,
      samples: 10,
      confusions: {
        find_upcoming_session: 1,
        none: 6,
        find_rooms: 1,
        find_presentation_time: 2
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    __qna__hnycqp38mu_what_is_for_breakfast: {
      tp: 0,
      fp: 0,
      fn: 6,
      samples: 6,
      confusions: {
        what_is_for_lunch: 2,
        none: 4
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    __qna__753k6ggrfn_what_are_the_objectives_of_the_summit: {
      tp: 0,
      fp: 0,
      fn: 5,
      samples: 5,
      confusions: {
        find_presentation_time: 2,
        none: 2,
        find_upcoming_session: 1
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    __qna__4dnyqk4py7_how_many_days_left_in_conference: {
      tp: 0,
      fp: 0,
      fn: 2,
      samples: 2,
      confusions: {
        none: 1,
        __qna__lpvecghkxy_how_are_you: 1
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    __qna__l09ioa5cd0_what_time_does_the_summit_start_on_tuesday: {
      tp: 0,
      fp: 0,
      fn: 3,
      samples: 3,
      confusions: {
        none: 2,
        __qna__cgib3mkwfm_what_time_does_the_summit_start_on_wednesday: 1
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    __qna__6mzc5s9ixz_bye: {
      tp: 0,
      fp: 0,
      fn: 6,
      samples: 6,
      confusions: {
        none: 3,
        __qna__uowl4857g0_who_are_you: 1,
        __qna__vbuwo35be4_hello: 2
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    __qna__8q0pnac5sa_do_we_have_breakfast: {
      tp: 0,
      fp: 0,
      fn: 5,
      samples: 5,
      confusions: {
        what_is_for_lunch: 1,
        none: 4
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    find_next_break: {
      tp: 0,
      fp: 0,
      fn: 6,
      samples: 6,
      confusions: {
        find_rooms: 1,
        none: 1,
        find_presentation_time: 4
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    __qna__37vj346exw_charge_my_laptop: {
      tp: 0,
      fp: 0,
      fn: 5,
      samples: 5,
      confusions: {
        find_rooms: 1,
        none: 2,
        find_presentation_time: 2
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    __qna__iwqfqd3p7m_you_are_stupid: {
      tp: 0,
      fp: 0,
      fn: 5,
      samples: 5,
      confusions: {
        none: 4,
        __qna__q4wiuc5bhj_you_are_annoying: 1
      },
      precision: 0,
      recall: 0,
      f1: 0
    },
    all: {
      f1: 0.35904237177413106,
      precision: 0.6482958507235618,
      recall: 0.2931164384945896,
      tp: 0,
      fp: 0,
      fn: 0
    }
  }
} as Result;
