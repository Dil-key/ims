import React from "react";
import { useHistory } from "react-router-dom";
import HODSidebar from "../components/HODSidebar";


export default function HODProfile() {
  const history = useHistory();
  const EditPro = () => {
    history.push("/HODEditProfile");
  };

  return (
    <div className="HODProfile">
      <HODSidebar />

      {/* Navbar */}

      <div className="content-wrapper">
        <div className="card card-primary">
          <center>
            <h1>
              <b> My Profile</b>
            </h1>
            <hr></hr>
            <img
              src="https://cdn3.iconfinder.com/data/icons/professions-46/140/girl__avatar__female__professional__employee-512.png"
              className="img-circle elevation-2"
              alt="User Image"
              height="300"
              width="300"
            />

            <h2> Saminda Premarathna</h2>
          </center>

          <hr></hr>
          <div className="card-body ">
            <section className="email">
              <div className="profile-info">
                <div className="row">
                  <div className="col-lg-4 "></div>

                  <div className="col-lg-3 ">
                    <img
                      src="data:image/png;base64,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"
                      height="30"
                      width="30"
                    />

                    <h4>Email</h4>
                  </div>

                  <div className="col-lg-3 ">
                    <img />

                    <h4 className="proEmail">kperera@gmail.com</h4>
                  </div>
                  <div className="col-lg-2 "></div>
                </div>
              </div>
            </section>

            <hr></hr>

            <section className="phoneno">
              <div className="phone-no">
                <div className="row">
                  <div className="col-lg-4 "></div>

                  <div className="col-lg-3 ">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX///8AAIAAAH3g4O8AAHtPT6L5+fx5eblra7L8/P6np9Tk5PEAAINcXKfq6va3t9cnJ5UtLZjBwd709Pp1dbJ+fr3t7fYAAIc/P6BSUqrHx+GAgLewsNaLi8HT0+jb2+2Xl8tzc7pmZrDPz+cJCYWXl8GLi7xVVaEzM5RGRpZWVqpJSaAREYUwMJOoqNBxcbI8PJUbG5I6Op4bG4iwsM2ensR7e7Szs9GTk72Dg7RsbKthYaIjI4o1NY5iYrIeHohAQJXdWIeMAAAJ9ElEQVR4nO2dC3OiSBDHpYMoihJBxQUEfOWlYhI3ub3N8/t/qsNHEiQyQA9okuvfVV3VVq1D/5mZnu6eGbZUIgiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIL4IsiTpejdg/b9ut7mhHuUkyqe/EbD98aalrh4gSUfSJTXdkamp//z+fTeZnJ1ZK9prFtU1w0aEcpToX1ix+e3fdUP3lnV2djaZ3P3+R9U003Gb+mG06Y7mT/78+/f8db40BDEE5EuoYWV8ejFt/LX+THxbcwsUKjs1q/1wOZ8psJYjHI6tamH88nT50LY81ZVzl+d4w8unpXBgZfu1CrPHp8tGX82vN3X1+Wbd9lG17bAxZj7Q+PtSr9tXSjAXji1pL8FkVa7UJoe/lepa1fii6t4A8cYadZHdZ06mIB5bQTIgKgu1jtCnWvOvNPOYwLjqZ9Vo//0++lbArDHJMla1xsu30rcCZpe1tPrc4ey7yVsDwtRMo69uKd/AvewHoJoY7ejqxbfVt0Jc+uzpeGIJ33KAfgDCwmUINM+/ub4V4lSL0yfZFz9AYNCNc39/ICfVXn6EwEDi0tuXd8g15YcIDCQqkz296H9rHxoFvE8SzWPblDPgRwS6Nz9miG4AZTe+6f6EZWIXmO9kG96x7SkAcREK4MynH9eFATP7Y6H499jGFAI0mm8KtXlhXQh7648fhd+inrtG8d6CmT/5P2ht/Phxfn153hhWB5XOlspgMahWG43z8/Py5ev108XjchzzGnIw4nwbhLvTvJtXlk/nD+2+Z5tufC6j63XXMVXfs9oP568XswKyGmM7EzUl33bHD3e2xpD2me7JSLPvrNwni9heW6Gf5RyvhXxYJrpXeSuElrNquFnmb3hnJinRgCklUni25DM34Z9Vw3WDtxkQWoOJbb3/+Q9uN6EbHqWW7T2PuUWK96s0yuEbpCDceicrSdp7sxauyt4Mx8arPF0aDW74NK5DN3nCpfCl8VYzeFcI5ycohTuDaduq7l1zpa0QTES5ilcI44b6buCHwgsHpdANS3mvtTStOYdCsSaXpB7+Hb30Q/H7u0JhFlsKYjIKv+qPJiS1jFcIVakk4TPDRz9cDvlQqKifzU+BvV9hIB0vEW4Dhej13qjtVAo+FIp3qE3LfpzCkoOPugyppGOnodjfXRRCCu9RW+zVWIUlDb2TIjZLJ0iF0Iqseh8K4cKrIWjt9TQbauh+MEsm8rfGqBSnUAARw043RZ3VL2Qnivbu/E4PVKOBi5b8owxEFTpjnESxhu1/49OKkK/CqDuWLaTC/q4HSw1Mo/vm0gJlQVz71ag7dk5REsVOqYI5kSaKVtRdejlnmV6kfd1CnZ0TKyV7WMVgRqahn/POOLxEd6ydBcbOob06IYohulTknp9DuRmRiDZURrH78NF1AZWkRWQiYA1VFxUMo7BGt1FEqWxZCz9DNlF2LtTA02DY8ebNdgH6gnF6HZ6Kso+LIyrI1WIWerjez9mNvjMMLUmyjaq2BApRK/5OkjtBhhvJKP3QqqjiFHZKKkphqFBhp1onVmsoKIahKOtD1CkfEy5MajiFHq4QBe33YtNomWwuiILR69Rs03VHI9P2nlsGpDq3Cqcfb9IcIwwVRB+XH36cBHBvkywFYTb1nIjn72qd23GKOr7Yk7O8yj0NmCUJ0fnw+OZK64l16mXZ239ISR4trpNnMPTf/r7TQinsoipR0NgOnmaF7UZhPPSjoUkIt3+Z2I/Lt5fpoKIKQyrJiOVi7G3Gjt5PmBuvNYa+tdlnieewplu3fYIJK+AqmE6jzKsZTDfjTqoxpwYY99E6wGcks5H0uMXmLXXbGIWrEaBXMv4SbrYDR31kCmwlHITc0uwnjNTZZO2m5En26jdU1ybUF9sLTOkyQ/Fmm96PmDkpvEYTrNhu9A2m6fC4eWCzY6Q08s1UpbOdJJJje51B9fn56tea3oZ5a4fbXu/Xr6thx946/iazlAxl1jHPCBo7f4fe1rHV1f7g+de0d7s26HQ/W2OnzwPP4btS02F5KGhk2n8yeyyFAgwPdDVvhy5rlYFyxg027Zot0StEAxt7xjDoKsMQ3aAyiwRgpDqFnytSlWHPdfIqEUX2mUsrlA8+Thl1iyAjQMxwyWJGHkvcjh0HHuOVf6o0pkJnx/CdvBUkUH+I78IybguYHVxBGXE9jQd1GWvLLPX1owhyn9WJL8hTOkh0K96UbCthmBPmOL0/6N18RiaD7sLA2UwYAjMFSdzIfuyUgeuEfIkFMwXEHiZD0RzGWiL2k38ei86ciTgXjWMUv1QA0pFusOMdWJCscDWdCYbTg1Oull3WnQEDE0jgYORNIt/CLDF8tAALtJfOih//ooEzQp6w4vmbg3lTRt5kcEYe7BTDP9AwdRivucXp79xLVtZ5dSBvykju18U7HtjXk4zDeNMuYyCJFc5xJA0ZAkMF8EKxGXlT9KxbZliJ9WoS5CMhwQZWBVeccLYuMxUKkL14kB2TVYYvWqE4yEUDmz7TAo+zdfYoFWBe/KLP3h8RO5zzUE/Yfhnjjh9nwWbvVTxzKky8zLrIR0Y8rOR+pbDHuSY7r2yF8Iq76ZDBAvY2JRgc+e8K+5HdhcISeeUoLYzkfiuRM+pgFSk3tIuN3OpJ+7BcKX4wCRJ3QeG12CXRTDrWAD2u9keswHvDGF/pSoHErKOsUbg8AXvzYvMO25xTnUk9+cAH15qfZqseLoocpnYKA6YcnsBMc2RGKTAPltNczuGoCLOLie/vcFjcMHVTPD/r/naYdHcq4Ka4PHiQ6mzR2EM2rw/TnV3a8+2ZnOimOzqH3l1jlPB2H9ArKsHw0xkQhB0oC1z2qZoQSkGb+lLac2UwqyGGUTP9sTXOsnMsZur7uDDPvumekLTstn9TTGzKTO4jJmS+66z3GcXuz+0XkgcnBt07JpxmW7Ok5JwijPhchEKfsfG1R2IrSy/qSccTo4wLWPT1+0wmrOZiandTX2Q9VgkFJBiZbzbBYy3doiE72b9pAo3cY1P5LvtJ4vF9mpHa9TEn1JGfbWCQyc+8U64luXXZbKMuLs68vBVqqOscMKuyV0bXesK0G1DNOXLTkfeMBeFxGK/RqVxgPw4FFzmf5DvBfzwDhHl/X2Wja08Vjo/PKF6+vobr058gCqcV29n+wyqrf7SlrvWnBue3dR5yPcnH84WXrUgQjHl5UQn+a0xbQefxXuiDl1wjtxGnOVuj1ncZgF/dhrM8w+90yf1hgXKOOxj6l/x8q5KjN20eW8xekF8yIoVfCFJICknh8SGFpJAUHh9SSApJ4fEhhaSQFB4fUkgKSeHxIYWk8H+mEPH93uL59LloDrrT8lckx/N78smX5BjfjiIIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgvif8x92OviL2jbsYAAAAABJRU5ErkJggg=="
                      width="30"
                      height="30"
                    />
                    <h4>Phone Number</h4>
                  </div>
                  <div className="col-lg-3 ">
                    <img />

                    <h4 className="proPhone">091-8394256</h4>
                  </div>

                  <div className="col-lg-2 "></div>
                </div>
              </div>
            </section>

            <hr></hr>

            <section className="position">
              <div className="position-info">
                <div className="row">
                  <div className="col-lg-4 "></div>

                  <div className="col-lg-3 ">
                    <img
                      src="data:image/png;base64,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"
                      width="30"
                      height="30"
                    />

                    <h4 className>Position</h4>
                  </div>
                  <div className="col-lg-3 ">
                    <img />

                    <h4 className="proPosition">Department Lecturer</h4>
                  </div>

                  <div className="col-lg-2 "></div>
                </div>
              </div>
            </section>

            <hr></hr>

            <center>
              <button className="btn btn-primary" onClick={EditPro}>
                Edit My Profile
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
