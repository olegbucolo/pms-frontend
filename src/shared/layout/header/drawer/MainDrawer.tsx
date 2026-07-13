import { Button, Drawer, Separator } from '@base-ui/react';
import styles from './index.module.css';
import LoginAvatar from '../login/LoginAvatar';
import separatorCss from '../separator.module.css'
import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export default function MainDrawer() {
    return (
        <Drawer.Root swipeDirection="right">
            <Drawer.Trigger>
                <LoginAvatar />
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Backdrop className={`${styles.Backdrop} ${separatorCss.Container}`} />
                <Drawer.Viewport className={styles.Viewport}>
                    <Drawer.Popup className={styles.Popup}>
                        <Drawer.Content className={styles.Content}>
                            <div className='flex items-center justify-between'>
                                <LoginAvatar />
                                <Drawer.Close className="cursor-pointer">
                                    <IoClose className='text-2xl' />
                                </Drawer.Close>

                            </div>
                            <NavLink to="/" className={separatorCss.Link}>prova</NavLink>
                            {/* <Drawer.Title className={styles.Title}>Drawer</Drawer.Title> */}
                            <Separator orientation="horizontal" className={separatorCss.Separator} />
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