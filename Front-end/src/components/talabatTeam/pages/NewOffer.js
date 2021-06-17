
import React from "react";

import { GrAdd } from "react-icons/gr";

class NewOffer extends React.Component {
  constructor() {
    super();
    this.state = {
      copoun: {
        name: "",
        includedItems: [
          {
            name: "",
            price: "",
            quantity: "1",
            img: "",
          },
        ],
        priceOff: "",
        code: "",
      },
      // da hyt3mlo update on button submit
      //wna b3ml call lel class da mel class el tani ana hab3t function+ resturant ID
      //w hkon tb3n b3ml call mn zorar el restaurant da bzat fa hyta5od mno el id b sohola
      //w fe function hena htet3rraf ht3ml call le function el parent
      //bel object da wel ID eli estlmto hrg3 aslmo tani
      //3shan lma t3ml call tkon m7deda el restaurant bzbt eli 3yza tdeflo el copoun
      //f function el parent hykon feh ba2i el logic
      //enha takhod el id w t3ml update lel restaunrat da bzat
      //wel view sahla hkon ba3ta le zorar el restaurnt da bzat , data el restaurnt eli aana feh fa hy3rdha 3ndo bs

      selectedItems: [],
      menuItems: [
        {
          name: "BigMac Combo Large",
          price: "80 L.E",
          quantity: "1",
          img: "data:image/webp;base64,UklGRkoaAABXRUJQVlA4WAoAAAAMAAAAqwAAqwAAVlA4IGoWAACQUQCdASqsAKwAPpE6l0gloyIhLtcsCLASCWoA0qSKSx/BebHyL3MfRdS20m7iy7/gO+H/u/VN+mvYF56X9y9F37Vetj6Pv8r6gH9y/zPWuegf0u39/sJrGD0H/GJVLhVqO9/+NHfr8fNQL2b5uH2XcubL/t/QO9wvu/7C+tt9p5s6XTQH/TXo66BHr32EOl/6OTfDCFufMwU6AioSwKLb7BRbn44kHmyNsHduIwEw/ftEuYPw1IAXwPJ+wIx4p5bAn+qXigPqpZ3TQfHg1oPa4O9n6M5KiTwseeCRQ4WmXnhNBmgQUFiqXpdSs1Wa8tGyT7S1tDPPXdxxNIrLj6NJFZdCTqXShEFqecfUw737MNNEhXUohC+tE5+xveKxPVbLL/5SsJpn9BjAPJAc5aa6w/f53D5rKjoO9lU4hGuVTmsbvdBkG3ydOe56INZwSMCn75KfhTtUMkYE9cNeH5ln+NCTiMI8nYHdP2rzWeHwJhCOIbBpYZBKOoWdu+QhQwGmM8uNAooV1NqWqUO3gqQpUt2eWW20SrZka/TZ1qJKqEucn9ypwIzyJZ85G2ZRYjyLOqX31F1+VuftRsz9O4UDM/gjJ1Jd3cTGoLWLnBQssqfZVfiRfzj2l4fBlUn/oLyV+vn764ro9fK7dZ5V/q99SsNX+kN9LuxVDCXunOYG4qHm7eYXaUe2lsk3e8KiWLTZjBd0w/Ax9QkGZM3UUIOt+sXRjs9dClrgxfSqeTI+sHLw4kYs3Mqj91L2QKIUEJUGg/IiqEvaO0iVunTYfl3TcJo2+iUnixZb0lfAk+B8Jy76+R+a2QrJEs2c/nhW8hO8EitDLeKYcB9QR3zrdTHXfn/x/+Pt6SmurDtzyqb1C4Rf4ZKUAP79dnBfOVFUH8iasCsOncYyXjWs29v6l1HYDtqfpsjoSY3vU2I6nxdNduoztXjAYIy0fnq9EqwRl7hjlIFPUvJ0qT6ns1vELJrewOqViwOVgwP0ZALd8h4RCVPTx9s7qJe4jXHTPVQaY7Itg7BIieTWzDo9UcNI5O8fT9N35GXoM/dLbdoBJIeF+aVMdjtLgwB6NYbxsSv29/hv3CdJ8VTZ/FA2RLzvYMdwhw4yuq0stzVO+I4+H9ymyIqCKWv38861046Q3J//5Kl24xi8ak4b+cp52r86PIFd9j39JCSSEAc4JbWYfDj7GlhRwnQZ1pnCheUSOHD99uHpvP+1U2JT2B7SLljvPimuEMEmOAXU75Uf+reD+bUUnqYWjgHhYU2J7hclRous+3VWpL6mvZs3biCskJBoIjPDA2ggVL7m98AuZOH2zGOAj3HTB1saBRh1BvTefZiuv2O527z1hARixYdC1jz+C9Po0YQ0Ki9ocP2OSp7MyvaSlCSZ9ieuKnZtm4jEvgtRDSbeQm7ixxjVxwIJFRG8fKv0vntjdu1bMvpuK/Hrb0DOVZv38blljyzIK1jKHGu4pKcX2zmCWHCxEKpQhqtNePgP4TTiKWhAg5n+KL6XiS8t0z3gXyfPJs88LePP9UQUpU9fCNIQ7ze8cQQB2Gysbthov9gTucmomJcVN3FGNK5sxBwb8yJnsusE1AaPJgDFSy5oAIdo4gh024fMWvsK5VaGesoswlHpDqNiV8zqQkZe/yakrJDVblEG2XFC4hNI3BsbszYJxKdzyxRH21sDGgl+R280zSRI10LGMXWZNKriDUpD36LK8L/E5oikssO9++V3/C+usUv2anKH7EMnu19tdR7Vlbgwd8R+qYOra4mAU8tayfXN+2f4OKmrLX8grASBr7DSCNk5soweyeXq37El+qpQY1nrW8K7owK3S9SEgdW7kz6enYCREKdNKO7V+Eq8vX089nMXB5WPr1npyA/kF+E5/yRiV/2KOzDYO3Xxaoec0PN6vVY3Ko3Sy7sShWUKCo77dy3CCIzkplteiU1xMPelut1/Ait7aTcxHQ4CUO9h+4KQbyhBfdpBWS1iDo9vlw99jkvJZUvhsTa07A222CcVD6SLDC286YyVksJoOh1pqIbVq0DQr+Zy6kSolxMFSVRYx6pDILmhFlJzM+om9h7WFtHzZ4M+bZgpbdRiPkDH5/uVVVsWfZnC58UbwzHtBJ+4QbPZPCHN8wtRGuWFiUJZTLTrWbN5bQW7LiTT09U8+4vgrLrveD6ud3jmN3VR6gcw3SVG9rmxSQmNChFOhC0P7vbQ5FHPNxHf4Svb3WVKVa4SIiFprx9ZaQ0e1Pds6BbXk82cuHw/Y57PUqoWBzsn8JykO4kKeqsGY1nuhg6Aza9+cjzCF54/8oO62/lCAB8cZw8TsH3fV9Ke5Qp+uc97Gw55ef0l2yjQCMsGwB/b1HfslLPIJkieIf1/LN6B/igMXn/8Thnj7C+UJ/Rltl64WTLb0UszePhoY1Ttwu8deSwKqRqE+1zUkaNfVWwj8XyP2MvXcSwNHKVtQ88wg9MCbWKd+VUd9YxSyBLJM7+coufp+hUOY8+DRRW0leMPtC1KgxUgZCC9ti2l2ZNBuWg8wwCmvpMQYOwmy0ObzhwbxHPxt3m54qnQ9A1tbtsToIFtz9rcTOD0l+gulZj+T0tkDNNn2ZI3O2Suwzqyzu7w7lNGRzGUPqtctuhI6GHafRMgKufQTQ/1ORXAPRfFc1ijxDnr2z2Q4WbiyqA13amJBHQgjsaVHGyx6SmLsxehbcg/igPHvgciQTQM7w0OURwmU9L/5eiFcXBqJFp9n9QpfPjQIgpEh0IJChaBNiH2Om+n4gMu7wFou+zdbtHlVlTMfuLnAugh1fX5OCZR0eK3xX938+poEef67uuMbFG0NM/NWgpWyeVdv0Pgib4acM/47/KNcMWBfr22AHhXBtpAVzb9GMKcxA8/8vb1aFsJEhj6/Hh0cVi1n22v+5s4dXhkJDQGXqguYdCW+fCSPoEPR6fV6/M36/Dul7cOUhcvQqTVKguvoJZsK4rWrP61Ti2GfGriy5I64U3Tm4Qy+DdQQvfITWEtdc5DD5A5HsFI2MMYL23rWJkPfj/K0wrdXn4LI4gCLvp87FbKVdhmvnM/ZQD+UaMyyY+EHVA5e+C6db4XA4ycnwdHDW7CqyZP2rT6RL3ookYlKshA2D77IJaSjBLKLitB7bCHDPfCqeE5owwLulrkofo5+MsjWXSq9qDQ76n/e4m3q+efZA/NtHU5cJVBXn7nzYtax9ozUwVtl1jK3MIrOvzxZ08PjlBQRcA/oy2vCRNpSxVDnAliF6fqBBYAMCj6Hu4d4ZYVbIunNShk8l5WazLNTpR4c9T49CjGK855Bt3IiN603h1yLk5hgUY/xoP2j68MMwN3DtWuhsb9p6UjWi5AK7d8t7gWFUs7/gHZb3WCSmHoBY0xjJxzIJW6deldsixX+1SgwWNqNQnqusnP2nqoNE9AGFmBFYAdzMrMqi1ee3ub5xDcdUS85lVVu6oe6vLGS2u8gsWFNw9I/YQ9PtNwhdSiSfQS7jdxs8ptR8BXNTjE7ZQ6Q2hYxccSvPQ5ZCQyrLGyiRggwGTPC0l91xF1svVJ1F66kIlSI6sQWoLNR2lecqG1IeqQjhg7ERgqijC6PVFdgewgX9lJjet4Hi2o2ctKAjHS7kuzbNlJ6SYhVU14VMhxUN61C6YNaIpPgI8s188WnFvD5t4tR/LtiNra2XuOMkR6Bu2CgWk6nHBt+7ZPz5J2tC4Q3w3aQ6fEJ0D8Qr+IUK5UhIV+iiyDIAz0Xiv8JIAgCbhAg5TE1nb6qeWsn6jhWnq/R+eHhmSLsbJSD7PcVAF8H+67dMSry3uLpEkbp50zr6ak7upGphDqPz3Ey20vLMTaKxoKw0/4FmcXh64rr8Wm9HI6zshrzx6hZBnqFWNdX71inlfOY4EPjYap3DmzgQ8lUdAFNHUo3oDhsWvQkiZn+0VIKAWV5dRk7d5ymmK0rN9/oJ7evdc98LziZBof5LSb3cGWp1LCPkWe2js8R2WCp5N++6KOlRM/Mjc4ez1GE7jgJhlaKvApTq8k/BfaHUeicO6uYOdzBZWYtmI7WCbzULC23HdJuaL76b3GPcQSGgpMIhKfvgtPp94Hm/NJWbD866hyfk/mFXWEL9yqEyqZqffT7ZYDi7HIqR/4oldNeCzIsiuRPSS2z9QHl1eGh82vvXmVAMaLkEui6oZtbjtuHxQv6jVB30vf7aj0tnbKurAyeSgche5utw+iOMiqekMr46wBJldwoZrLKu2t1DDBZIW3uCGlrK/XZ/yeutq75K7Hve2Kbj8yRAgIvBpe8gaz3PLg0xvJJekSyXWZ57G9j3xOfxqD48oRY30TwhXYlQMj+10wE97mjK2PR+HV7hWS1D55i5xY8X7NOUtsG1z77OajdpQKh5xFprdKhCM99iVozrnJvaaIAQjklfAgIojjJLbuVdv/m2GZ8yJkB3Pc+bMftBGmrnhSB0cS1/hNy9Jp0RUPLvMvQb7siXEzi77aJibe7MpccGvKuWqR4KLbAnbj8E1e9042v93XGDbwK2t+CjBpi0nIU8UeWcgPznx51ODiq9bsnk0ey+eZ6DGO5T64UOIYQRF0kFFtA6ejb4ZpAgh1WPfln2g1QcrNuH4aZUFcMnHPYIEGj2DeLIWQ/UIH7CaHEAjWkOdlxvJKnCAS5Iamx9w/igdR4pzSezVkdgO7JMAVcNUJKiCMcMQfbs6XPJnCn+3hRtdpaPxdqAG6Qibv+q3ACQMyI6wDZu1xa2ltpluOwWTGGBTQeWN0DGDPYYF67gn19oh0bxue1C4r3F5PYklbey3blm01Ab762qtjbX5ZTofjzoLKORH/EHFVNqNWKBJUNyMsvDrHTrcuTVs9FfV0b5wxlkeu58gyrZyz2R8Q7o+IlXvuj191fVXIFllge1w9DIXPndsahNRXCVz58AwxtF1P842XvYjMGePsHu4yPUOjwaH2cjCuok47O0YfNH7DpOx4OCKqJM2K7wcakIKQ4U+WQckwHnC3gk8xXQH14UvB/k0f+peQhqCq/ubnLt5zasvqFLBIKSmR5nLH2P1F4RT8kq9/ORDo0XkdHQ9Wrhe4N5iV4GTUYlbl756oCVNQv35d7SaIxCFA1M6zoYl/dFLP3WWns6XczwP8ycIUy0Fv5S2C63Tkx+JAyTIApxb9lZEPGmZhbrO7s9hjeGwm+kunDPDcRp+zvPQJ9JTYdiga80FZb7MkzFY1uqPdoU2hAgKGCkgUdaDORRUN6JaihUt6M/JeseU2pj8aNHkbe4qYdDnKvt/rcn7G3UbaQ1AXYtjyeqyyXMSb41uEfG2xuD6DvNVtX24kgkERpv+38pZFIwwrjS5YDOavEY/HcLiDuwNE6nrpcYuxehhmlACDUzhzr0uJhsLg7ct9c7I+Y30AukNfimW9ZSdKIeUc+5pFgmse0+uSp5yMCDBkRLhiLNTWMaG10R3O7nUgEDQHJcWCX/D49Jcj8Fxc4rzi4Scqwqtrs/gvrlAsIPV90Mz1oI70yGJYC7zNwrXKORGZ948vqN/p+iDt+lh+1L5euFQGwxxVrJnYHnmR+6qmFWsrp4fB7HAFIfdEEtlmTfyyCZQPtXgwLJ241UIxGaG+DQ3Z+/6LJkfJ6X4PA0YEplyi4lArKeTsD7aln5cdt76rXbUnGnGH5AnKSc8YCk/JgKISIiD8DQCbNoWB4hm/iBd7aR1+gvyoO0PqDj1vB+e2YorVetgJ5cHSEgRkRIItbwjOOGnY/5W+fOSBopywdKuT7DKF+IuGoP0AJ7VMsvNYZpSWAiemVIwl9zT3LCoQgfmxajnr24RsQRXfkd+oowZwnCoi90dh+Te8TBG7RSnNMLbTrNjoWOdl3Sfw5rPYDOKNkEd3x9GnacdwpiC+smT5tB1YIp5qi1I/Z4L+bXRVF9nmSkZJk3YSd8/jPY64u1JrRTzLe6g6AyHk9Mv66CcxfHTcvl7iAkWOSnCAbjle253JFwrxea64HJq5P6QRSoaDBwb0bxAcLw/+KyP+BmtBSQOJQ1g4j1ZuVBoSFMkAJkjeNLRAXUXwx05+1v4l5VCZfjw94X1vZIDGvMWQAvO0FZHz3qvU6dIwEoCAivFmoh7i4owwD13zqC04rdkB1xOzfd5BvjQbOz14fAreAI2jmnvZDYy68S1ZY+cW8SMtoFXiTl/KyQp9uihNJDjQe56GjXEoFqZzGMYUN6sypNUm+/xUp87/C3c6T4GtktRBL8GKfW+ciBtVqBi5f1ds1SyGIopGpc18bWrDhF45+OecRQlGv84ZZnx/8ZW9T77crRJoPFvYXBkwdpRzk4rYstUfjJHR4jEvw/YG8QAlUZJ5inR+/oaWhJ9pGk/zViZrZI7rwsGuqf49QiPs9nVO5iDBuruJJkJ3c/3Juhexi6Cl37kyqUpt7xausB77hBmPru6mLdHM6XGnB9tan6fX0RSPq09cU5xR1HJz++MNnbmJ1jIf2J4R19qfh1zlSsONHpwBPVQ6XMaYLvpNZpVIgrnqYEabvCTdUO4QGT6lphtpoVyxbzTig/7HiWBnPth2hEb5lunOOuWtpugVx+8Bm+cJup+FYm2Vl24/4Kr3lGBCJAdwr17YiMOxDiIx122k9Xdruy+YY75Wvpwx+seBaQ9DHBaSnR1XjPRC2SiL2As6IttOaH+pe0xTJtgoAAOzwUf81ShtsQkg9AG8oglvbQgPCnddjS9FptAcomm5zf4CiBte9OZsn9PtgbNq6bG+R7symT4jylAR4aief1EvcskzguGqJMoF62I7olaXfOAOhiuEH7DPZ4WiwuoqeOWKi7swz1JsVxZpuRZSrRMG032jTOG1n5us4pzrU4HBdcE8qq26cSWmK0Pmh51nVTRPK+ke8Sk2j1RcnVjUaJ8+U6hxQP6Iy8plr1EnoFarrWB+FLmzvmlcbiQT4PORgSwNk9WR1PP0f4Bijx/cnhzK+NydtpIRKivRUkCDVkNNj0kXOHqM+ydv2+0ctwuMR7BatGNrKbQbL1A58ruq+JAUnDwsyyqxiLG3VzZjGJ6LhkkssADle8EU+PxNnZR8xOHqYeqx53fDa40Gx6GgIsVb3HYiy1xaiNDldEzHnZbo/uNgkG1sChEUrYz35/V4Tt3lYsYA2r6s1JQuIrbPJq4jLlxrh3KmFDZRbI8BEebjjpklqxAlPBwhAUB73tkkVyZ3XpHs6oHQp9cKZACuehm1Vz9klgJQTXs+eWZm1xCsT2wXtPZWqG9UONzr+zU8EmQuUxQR4OwzJR9cbSnrKEkKOXsMP2zfk8+sHfQxd0VhVOD+vgeSGdJRjZO8byIKe+WViSApxikJwP1oJyGXYiKUDjX7TsiKHlvdEFhKdakTO54j8jaCsWtNPV4HpAB6Z7JXNNbhsurQNfZZH14MD9Qm8+tyEWLb3JOmQ9++c8kA28guCgCatlFHMdqQ1lSsQudFoRii1jgW+SAXLWjUGkywyNFQ9yZtxEELboY2TX0Rn82Al+gQdE0GUZJhvuLsy75B3d6eS5dtp7o/ExaXc5BDgEBJMItATo1pwgAR7BsAK5mjEpxV1k91V6NjiY7sEbAW0b3+ReLtsTPOJ5bDD4ljs6X3QCrV2pOwV+ngrB5v7tNRuDwxo0TECYCLkqs3/RBx2h3D39ACFMxWrtLE782KlIUG3ELdsyB0I/UcAOuOwwAAAEVYSUaiAAAARXhpZgAASUkqAAgAAAAFABIBAwABAAAAAQAAABoBBQABAAAASgAAABsBBQABAAAAUgAAACgBAwABAAAAAgAAAGmHBAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAAABQAAkAcABAAAADAyMTAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAKwAAAADoAQAAQAAAKwAAAAAAAAAWE1QIBADAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNjNGMTRBODQzMkYxMUU5OUJDMUUyQTgwQUEzOEJCNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNjNGMTRBOTQzMkYxMUU5OUJDMUUyQTgwQUEzOEJCNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2M0YxNEE2NDMyRjExRTk5QkMxRTJBODBBQTM4QkI0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2M0YxNEE3NDMyRjExRTk5QkMxRTJBODBBQTM4QkI0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+",
        },
        {
          name: "Big Tasty Combo Large",
          price: "80 L.E",
          quantity: "1",
          img: "data:image/webp;base64,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3tkkVyZ3XpHs6oHQp9cKZACuehm1Vz9klgJQTXs+eWZm1xCsT2wXtPZWqG9UONzr+zU8EmQuUxQR4OwzJR9cbSnrKEkKOXsMP2zfk8+sHfQxd0VhVOD+vgeSGdJRjZO8byIKe+WViSApxikJwP1oJyGXYiKUDjX7TsiKHlvdEFhKdakTO54j8jaCsWtNPV4HpAB6Z7JXNNbhsurQNfZZH14MD9Qm8+tyEWLb3JOmQ9++c8kA28guCgCatlFHMdqQ1lSsQudFoRii1jgW+SAXLWjUGkywyNFQ9yZtxEELboY2TX0Rn82Al+gQdE0GUZJhvuLsy75B3d6eS5dtp7o/ExaXc5BDgEBJMItATo1pwgAR7BsAK5mjEpxV1k91V6NjiY7sEbAW0b3+ReLtsTPOJ5bDD4ljs6X3QCrV2pOwV+ngrB5v7tNRuDwxo0TECYCLkqs3/RBx2h3D39ACFMxWrtLE782KlIUG3ELdsyB0I/UcAOuOwwAAAEVYSUaiAAAARXhpZgAASUkqAAgAAAAFABIBAwABAAAAAQAAABoBBQABAAAASgAAABsBBQABAAAAUgAAACgBAwABAAAAAgAAAGmHBAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAAABQAAkAcABAAAADAyMTAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAKwAAAADoAQAAQAAAKwAAAAAAAAAWE1QIBADAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNjNGMTRBODQzMkYxMUU5OUJDMUUyQTgwQUEzOEJCNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNjNGMTRBOTQzMkYxMUU5OUJDMUUyQTgwQUEzOEJCNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2M0YxNEE2NDMyRjExRTk5QkMxRTJBODBBQTM4QkI0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2M0YxNEE3NDMyRjExRTk5QkMxRTJBODBBQTM4QkI0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+",
        },
      ],
    };
  }

  addSelected = (item) => {
    this.state.selectedItems.push(item);
    console.log("selected item"+ item);
    console.log(this.state.selectedItems);
    //to rerender page
    this.setState({ selectedItems: this.state.selectedItems });
    this.saveToLocalStorage();
  };
   saveToLocalStorage=()=>{
        localStorage["selected-items"] = JSON.stringify(this.state.selectedItems); //to JSON
    }
    
   componentDidMount(){
        if(localStorage["selected-items"]){

        let selectedItems = JSON.parse(localStorage["selected-items"])// from JSON to string
        this.setState({selectedItems:selectedItems})
        }
    }
 


  render() {
    return (
      <div className="container "  >
      <h1
          style={{  
            color: "rgb(33, 33, 33)",
            backgroundColor: "rgb(246, 246, 246)",
            marginTop: "30px",
            marginBottom: "10px",
            paddingInline: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontSize: "26px",
            fontFamily: "sans-serif",
            paddingLeft: "50px",
          }}
        >
          New offer
        </h1>
        <hr></hr>
        <div>
         <div>
        
          {this.state.menuItems.length > 0
            ? this.state.menuItems.map((item) => {
                return <DisplayMenuItems menuItem={item} addSelected={this.addSelected}/>;
              })
            : "Empty"}
            
         
        </div>
           <h1
          style={{
            color: "rgb(33, 33, 33)",
            backgroundColor: "rgb(246, 246, 246)",
            marginTop: "30px",
            marginBottom: "10px",
            paddingInline: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontSize: "15px",
            fontFamily: "sans-serif",
            paddingLeft: "50px",
          }}
        >
         Selected Items
        </h1>
          {
          this.state.selectedItems.length > 0
            ? this.state.selectedItems.map((item) => {
                return <DisplaySelected selected={item} />  ;
              })
            : "No items selected"
            }
          <br></br>
           <br></br> 


            <form>
            <div class="form-group">
                <label >Offer Name</label>
                <input type="text" class="form-control"  style={{width:"300px"}}/>
            </div>
                <div class="form-group">
                <label >Price</label>
                <input type="text" class="form-control" placeholder="i.e 10 L.E"  style={{width:"300px"}}/> 
            </div>
            </form>
          <br></br>
          <button type="submit" className="btn"> add offer
          </button>
          
        </div>
      </div>
    );
  }
}

class DisplayMenuItems extends React.Component {
  render() {
    return (
      <div className="card w-100">
        <div className="card-body">
          <div className="list-group list-group-flush">
              <div  style={{
            display: "flex"
         
          }}>
              <div>
                  <span style={{flex:"25%"}}>
                <img src={this.props.menuItem.img} style={{width:"80px", height:"80px"}} />
                  </span>
                  <span style={{flex:"25%"}}>
             {this.props.menuItem.name}   
             </span>
             <span style={{flex:"25%"}}>
              {this.props.menuItem.price}
              </span>
              
              
           [   {this.props.menuItem.quantity} ]
           
           
            <span style={{flex:"25%"}}>
              <button  onClick={() => this.props.addSelected(this.props.menuItem)} style={{backgroundcolor:"blue",borderRadius:"100px" ,float:"right"}}> 
         
                  <GrAdd/>
             
            
              </button>
                </span>
            </div></div>
          
          </div>
        </div>
      </div>
    );
  }
}

class DisplaySelected extends React.Component {
  render() {
    return (
      <div className="card" style={{ width: "450px" }}>
        <div className="card-body">
          <div
            className="list-group list-group-flush"
            style={{
              display: "flex",
            }}
          >
            <div>
              <span>
                <img
                  src={this.props.selected.img}
                  style={{ width: "40px", height: "40px" }}
                />
              </span>
              <span>
                {this.props.selected.name}
                {this.props.selected.price}[{this.props.selected.quantity}]
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewOffer