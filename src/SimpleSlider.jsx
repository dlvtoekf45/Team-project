import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = [
    {
        id: 1,
        img:"https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1572586573642l0.jpg",
        title: "[퀴네] 바베큐 소스",
        standardprice: "3,800",
        salerate: "18",
        saleprice: "3,100",
    },
    {
        id: 2,
        img:"https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653035948804l0.jpg",
        title: "[네펠리] 그릭 엑스트라버진 500ml (2021-2022햇오일)",
        standardprice: "",
        salerate: "",
        saleprice: "14,900",
    },
    {
        id: 3,
        img:"https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1531797556744l0.jpg",
        title: "[YOZM] 마카다미아 그릭요거트 2종",
        standardprice: "16,500",
        salerate: "10",
        saleprice: "14,850",
    },
    {
        id: 4,
        img:"https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1633002111443l0.jpg",
        title: "[시프트] 비타민 캡슐 홀더",
        standardprice: "",
        salerate: "",
        saleprice: "7,000",
    },
    {
        id: 5,
        img:"https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653036071561l0.jpg",
        title: "[칼라마타] 유기농 엑스트라버진 올리브 오일",
        standardprice: "23,000",
        salerate: "10",
        saleprice: "20,700",
    },
]; 

export default class SimpleSlider extends Component {
    render () {
        const settings = {
            dots:false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow: <SlideBtnRight />,
            prevArrow: <SlideBtnLeft />
        }; 
        return (
            <Container>
                <SlideTitle>
                    <div className='SlideTitleBox'>
                        <span>이 상품 어때요?</span>
                    </div>
                </SlideTitle>
                <StyledSlider {...settings}>
                    {items.map(item => {
                        return (
                            <div key={item.id}>
                                <ItemBox>
                                    <div className='ItemBoxContainer'>
                                        <div className='ItemImageContainer'>
                                            <img src={item.img} />
                                            <div className='cart'>
                                                <button>
                                                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==' />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='ItemInfoContainer'>
                                            <h3>{item.title}</h3>
                                            <div className='ItemPrice'>
                                                <div className='ItemPriceWrap'>
                                                    <div>
                                                        {item.salerate!==''?<span className='salerate'>{item.salerate}%</span>:<></>}
                                                        {item.saleprice!==''?<span className='saleprice'>{item.saleprice}원</span>:<></>}
                                                    </div>
                                                    {item.standardprice!==''?<span className='standardprice'>{item.standardprice}원</span>:<></>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ItemBox>
                        </div>
                        );
                    })}
                </StyledSlider>
                <SlideBtnLeft />
                <SlideBtnRight />
            </Container>
        );
    }
}


const settings = {
    dots:false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4

};

const Container = styled.div`
    width: 1050px;
    margin: 0px auto;
    padding: 40px 0px;
`;

const SlideTitle = styled.div`
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;

    .SlideTitleBox {
        position:relative;
        display: flex;
        padding: 8px 0px 8px 8px;
    }

    .SlideTitleBox span {
        color: rgb(51, 51, 51);
        font-size: 28px;
        line-height: 1.15;
        letter-spacing: -0.26px;
        font-weight: 500;
    }
`;

const StyledSlider = styled(Slider)`
    margin-right: -9px;
    touch-action: pan-y;
    margin-left: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
`;

const SlideBtnLeft = styled.button`
    position: absolute;
    z-index: 100;
    border: 0px;
    outline: 0px;
    width: 60px;
    height: 60px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTQlIiB5PSItMTQlIiB3aWR0aD0iMTI4JSIgaGVpZ2h0PSIxMjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIxIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIyIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMyAwIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIyIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMiIvPgogICAgICAgICAgICA8ZmVNb3JwaG9sb2d5IHJhZGl1cz0iLjUiIG9wZXJhdG9yPSJkaWxhdGUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRPdXRlcjMiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJzaGFkb3dTcHJlYWRPdXRlcjMiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIzIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMiAwIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIzIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMyIvPgogICAgICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIi8+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMiIvPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjMiLz4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxjaXJjbGUgaWQ9ImIiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA1NSA1KSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGQ9Ik0zMi43MTUgMzguNjk5YTEgMSAwIDAgMS0xLjMxOS4wOThsLS4wOTUtLjA4Mi04LTcuODE3YTEgMSAwIDAgMS0uMTA4LTEuMzA2bC4wOC0uMDk2IDcuNzIzLTguMTgyYTEgMSAwIDAgMSAxLjUzNSAxLjI3NmwtLjA4LjA5Ni03LjA0OSA3LjQ2OSA3LjI5NyA3LjEzYTEgMSAwIDAgMSAuMDk4IDEuMzE5bC0uMDgyLjA5NXoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K) 50% 50% no-repeat;
    transition: 0.5s ease 0s;
    top: calc(50% -50px);
    left: 0px;
    transform: translate(-50%, -50%);
`;

const SlideBtnRight = styled.button`
    position: absolute;
    z-index: 100;
    border: 0px;
    outline: 0px;
    width: 60px;
    height: 60px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTQlIiB5PSItMTQlIiB3aWR0aD0iMTI4JSIgaGVpZ2h0PSIxMjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIxIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIyIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMyAwIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIyIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMiIvPgogICAgICAgICAgICA8ZmVNb3JwaG9sb2d5IHJhZGl1cz0iLjUiIG9wZXJhdG9yPSJkaWxhdGUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRPdXRlcjMiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJzaGFkb3dTcHJlYWRPdXRlcjMiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIzIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMiAwIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIzIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMyIvPgogICAgICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIi8+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMiIvPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjMiLz4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxjaXJjbGUgaWQ9ImIiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA1NSA1KSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGQ9Ik0zMi43MTUgMzguNjk5YTEgMSAwIDAgMS0xLjMxOS4wOThsLS4wOTUtLjA4Mi04LTcuODE3YTEgMSAwIDAgMS0uMTA4LTEuMzA2bC4wOC0uMDk2IDcuNzIzLTguMTgyYTEgMSAwIDAgMSAxLjUzNSAxLjI3NmwtLjA4LjA5Ni03LjA0OSA3LjQ2OSA3LjI5NyA3LjEzYTEgMSAwIDAgMSAuMDk4IDEuMzE5bC0uMDgyLjA5NXoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K) 50% 50% no-repeat;
    transition: 0.5s ease 0s;
    top: calc(50% -50px);
    right: 0px;
    transform: translate(50%, -50%) rotate(180deg);
`;

const ItemBox = styled.div`
    width: 264.75px;
    flex-shrink: 0;
    height: 100%;
    position: relative;
    transition-property: transform;

    .ItemBoxContainer {
        color: rgb(51, 51, 51);
        cursor: pointer;
        width: 249px;
    }

    .ItemImageContainer {
        height: 320px;
        overflow: hidden;
        position: relative;
        background-color: rgb(245, 245, 245);

        .cart {
            box-sizing: border-box;
            margin: 0;
        }

        .cart button {
            right: 16px;
            bottom: 16px;
            z-index: 10;
            position:absolute;
            border: 0;
            outline: 0;
            background-color:transparent;
        }

        .cart img {
            width: 45px;
            height: 45px;
        }
    }


    .ItemImageContainer img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease-in-out 0s;
        border: 0;
        vertical-align: top;
    }

    .ItemInfoContainer {
        position: relative;
        padding: 14px 10px 0px 0px;
    }

    .ItemInfoContainer h3 {
        font-size: 16px;
        line-height: 1.45;
        font-weight: 400;
        margin-bottom:8px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        letter-spacing: normal;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    .ItemPrice {
        display: flex;
        -webkit-box-pack:justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
    }

    .ItemPriceWrap {
        display: flex;
        flex-direction: column;
    }
    .salerate {
        margin-right: 7px;
        font-size: 16px;
        font-weight: 800;
        line-height: 1.5;
        white-space: nowrap;
        color: rgb(250, 98, 47);
    }
    .saleprice {
        font-size: 16px;
        font-weight: 800;
        line-height: 1.5;
        white-space: nowrap;
        color: rgb(51, 51, 51);
    }

    .standardprice {
        color: rgb(181, 181, 181);
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
        text-decoration: line-through;
        margin-top: 2px;
    }
`;