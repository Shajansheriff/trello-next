import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { styled } from 'stitches.config'
import {FC} from "react";

const Navbar: FC = ({ children }) => {
  return (
    <div className="min-h-40 max-h-40 overflow-hidden">
      <div className="flex box-border"></div>
      {children}
    </div>
  )
}

const Anchor = styled('a', {
  fontFamily: '$system',
  fontSize: '$2', 
  textDecoration: 'none',
  borderRadius: '3px',
  border: 0,
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  boxShadow: 'none',
  color: '#FFFFFF',
  display: 'flex',
  fontWeight: 'bold',
  margin: '0 4px 0 0',
  padding: '0 12px',
  whiteSpace: 'nowrap',
  variants: { 
    type: {
      success: {
        background: 'linear-gradient(to bottom, #61BD4F 0%, #5AAC44 100%)',
        '&:hover': {
          background: 'linear-gradient(to bottom, #5AAC44 0%, #519839 100%)'
        }
      }
    },
    size: {
      small: {
        height: '32px',
        lineHeight: '32px',
      }
    }
  },
  defaultVariants: {
    size: 'small',
  }
})

const LoginButton = styled(Anchor, {
  backgroundColor: 'transparent',
  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2))',
  '&:hover': {
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
  },

})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title className={"text"}>Trello Clone</title>
        <meta name="description" content="A Trello Clone app using next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <Link href="/">Trello</Link>
        <div className="flex justify-end grow-1 basis-100">
          <Link href={"#"}><Anchor type="success">SignUp</Anchor></Link>
          <Link href={"#"}><LoginButton>Login</LoginButton></Link>
        </div>
      </Navbar>
    </>
  )
}

export default Home
