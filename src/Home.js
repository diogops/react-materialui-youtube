import React from 'react';
import {
    makeStyles,
    Toolbar,
    AppBar,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    List,
    Button,
    Box,
    ListSubheader,
    Drawer,
    Hidden,
    Switch,
    Grid,
    Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Apps from '@material-ui/icons/Apps'
import MoreVert from '@material-ui/icons/MoreVert'
import VideoCall from '@material-ui/icons/VideoCall'

import HomeIcon from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Whatshot from '@material-ui/icons/Whatshot'

import VideoLibrary from '@material-ui/icons/VideoLibrary'
import History from '@material-ui/icons/History'
import AddCircle from '@material-ui/icons/AddCircle'
import { useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    icons: {
        paddingRight: theme.spacing(5)
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    logo: {
        height: 25,
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4
    },
    listItemText: {
        fontSize: 14
    },
    grow: {
        flexGrow: 1
    },
    gridItem: {
        padding: 6
    },
    subheader: {
        textTransform: 'uppercase'
    }
}))

const videos = [
    {
        id: 1,
        title: 'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
        channel: 'Diogo Daniel',
        views: '2 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb1.png'
    },
    {
        id: 2,
        title: 'CONVERSÂO DE ARQUIVOS | Como converter arquivos .xsl para .csv utilizando Node.js',
        channel: 'Diogo Daniel',
        views: '150 mil visualizações',
        date: 'há 2 dias',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb2.png'
    },
    {
        id: 3,
        title: 'NODE JS E ADONIS JS | Construindo uma API Rest com NodeJs e AdonisJs',
        channel: 'Diogo Daniel',
        views: '1.5 mi de visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb3.png'
    },
    {
        id: 4,
        title: 'NODE JS E ADONIS JS | Construindo uma API Rest com NodeJs e AdonisJs - Ep4',
        channel: 'Diogo Daniel',
        views: '1.5 mi de visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png'
    },
    {
        id: 5,
        title: 'NODE JS E ADONIS JS | Construindo uma API Rest com NodeJs e AdonisJs - Ep5',
        channel: 'Diogo Daniel',
        views: '1.5 mi de visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png'
    },
    {
        id: 6,
        title: 'NODE JS E ADONIS JS | Construindo uma API Rest com NodeJs e AdonisJs - Ep6',
        channel: 'Diogo Daniel',
        views: '1.5 mi de visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.png'
    },
    {
        id: 7,
        title: 'NODE JS E ADONIS JS | Construindo uma API Rest com NodeJs e AdonisJs - Ep4',
        channel: 'Diogo Daniel',
        views: '1.5 mi de visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png'
    },
    {
        id: 8,
        title: 'NODE JS E ADONIS JS | Construindo uma API Rest com NodeJs e AdonisJs - Ep5',
        channel: 'Diogo Daniel',
        views: '1.5 mi de visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png'
    },
    {
        id: 9,
        title: 'NODE JS E ADONIS JS | Construindo uma API Rest com NodeJs e AdonisJs - Ep6',
        channel: 'Diogo Daniel',
        views: '1.5 mi de visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.png'
    },
    {
        id: 10,
        title: 'NODE JS E ADONIS JS | Construindo uma API Rest com NodeJs e AdonisJs - Ep4',
        channel: 'Diogo Daniel',
        views: '1.5 mi de visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png'
    },
    {
        id: 11,
        title: 'NODE JS E ADONIS JS | Construindo uma API Rest com NodeJs e AdonisJs - Ep5',
        channel: 'Diogo Daniel',
        views: '1.5 mi de visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png'
    },
    {
        id: 12,
        title: 'NODE JS E ADONIS JS | Construindo uma API Rest com NodeJs e AdonisJs - Ep6',
        channel: 'Diogo Daniel',
        views: '1.5 mi de visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.png'
    },

]
const Home = ({ darkMode, setDarkMode }) => {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={classes.menuIcon}

                        aria-label='menu'
                    >
                        <MenuIcon />
                    </IconButton >
                    <img src={theme.palette.type === 'dark' ? './images/branco.png' : './images/preto.png'} alt="logo" className={classes.logo}></img>
                    <div className={classes.grow}></div>
                    <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} className={classes.icons} />
                    <IconButton
                        className={classes.icons}

                    >
                        <VideoCall />
                    </IconButton >
                    <IconButton
                        className={classes.icons}

                    >
                        <Apps />
                    </IconButton >
                    <IconButton
                        className={classes.icons}

                    >
                        <MoreVert />
                    </IconButton >

                    <Button color='secondary' startIcon={<AccountCircle />} variant='outlined'>Fazer Login</Button>
                </Toolbar>
            </AppBar>
            <Box display="flex">
                <Hidden mdDown>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary={"Início"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Whatshot />}</ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary={"Em Alta"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary={"Inscrições"} />
                                </ListItem>
                            </List>
                            <Divider />

                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary={"Biblioteca"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<History />}</ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary={"Histórico"} />
                                </ListItem>
                            </List>
                            <Divider />
                            <Box p={7}>
                                <Typography variant='body2'>
                                    Faça login para curtir vídeos, comentar e se inscrever.
                        </Typography>
                                <Box mt={2}>
                                    <Button
                                        variant='outlined'
                                        color='secondary'
                                        startIcon={<AccountCircle />}
                                    >
                                        Faça Login
                            </Button>
                                </Box>

                            </Box>
                            <Divider />
                            <List
                                component="nav"
                                aria-labelledby='nested-list-subheader'
                                subheader={
                                    <ListSubheader
                                        component='div'
                                        id='nested-list-subheader'
                                        className={classes.subheader}
                                    >
                                        O Melhor do youtube
                        </ListSubheader>
                                }
                            >
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary={"Mais Vistos"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary={"Jogos"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary={"Esportes"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary={"Ao Vivo"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary={"Destaques"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary={"Videos 360"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary={"Procurar Mais..."} />
                                </ListItem>
                            </List>

                        </div>
                    </Drawer>
                </Hidden>
                <Box p={8}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 600 }}
                    >
                        Recomendados
                </Typography>

                    <Grid container spacing={4}>
                        {
                            videos.map((video, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={video.title}
                                            src={video.thumb}
                                        />
                                        <Box>
                                            <Typography
                                                style={{ fontWeight: 600 }}
                                                gutterBottom
                                                variant='body1'
                                                color='textPrimary'>
                                                {video.title}
                                            </Typography>

                                            <Typography
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'>
                                                {video.channel}
                                            </Typography>

                                            <Typography
                                                variant='body2'
                                                color='textSecondary'>
                                                {`${video.views} * ${video.date}`}
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Grid>
                            )
                            )
                        }
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Home