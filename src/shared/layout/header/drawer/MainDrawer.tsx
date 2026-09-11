import { Button, Drawer, Separator } from '@base-ui/react';
import styles from './index.module.css';
import LoginAvatar from '../login/LoginAvatar';
import separator from '../separator.module.css'
import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import drawerSeparator from './drawerSeparator.module.css'

export default function MainDrawer() {
    return (
        <Drawer.Root swipeDirection="right">
            <Drawer.Trigger>
                <LoginAvatar />
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Backdrop className={`WHERE-ARE-WE ${styles.Backdrop} ${separator.Container}`} />
                <Drawer.Viewport className={styles.Viewport}>
                    <Drawer.Popup className={styles.Popup}>
                        <Drawer.Content className={styles.Content}>
                            <div className='flex items-center justify-between '>
                                <div className='flex items-center '>
                                    <LoginAvatar />
                                    <h3 className='ms-3'>Oleg Bucolo</h3>
                                </div>
                                <Drawer.Close className="cursor-pointer">
                                    <IoClose className='text-2xl' />
                                </Drawer.Close>

                            </div>
                            <Separator orientation="horizontal" className={`${separator.Separator} ${drawerSeparator.Separator}`} />

                            <NavLink to="/" className={separator.Link}>Work in Progress</NavLink>
                            <NavLink to="localhost:8080/api/v1/auth/register" className={separator.Link}> on the User Panel</NavLink>
                            {/* <Drawer.Title className={styles.Title}>Drawer</Drawer.Title> */}
                            <Separator orientation="horizontal" className={`${separator.Separator} ${drawerSeparator.Separator}`} />
                            <Drawer.Description className={styles.Description}>
                                This is a drawer that slides in from the side. You can swipe to dismiss it.
                            </Drawer.Description>
                            <div className={styles.Actions}>

                            </div>
                        </Drawer.Content>

                    </Drawer.Popup>
                </Drawer.Viewport>
            </Drawer.Portal>
        </Drawer.Root>
    )
}