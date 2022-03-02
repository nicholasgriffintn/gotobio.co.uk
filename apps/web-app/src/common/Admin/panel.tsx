import { useState, useEffect } from 'react';
import { Logger } from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';

import ProfileComponent from '@/common/Profile';

const AdminPanel = ({ user }) => {
  const logger = new Logger('admin');

  const [avatar, setAvatar] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [background, setBackground] = useState('');
  const [backgroundUrl, setBackgroundUrl] = useState('');
  const [backgroundOpacity, setBackgroundOpacity] = useState(true);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [headline, setHeadline] = useState('');
  const [bio, setBio] = useState('');

  const [links, setLinks] = useState([]);

  const [socials, setSocials] = useState<
    {
      username?: string;
      external?: boolean;
      network?: string;
    }[]
  >([]);

  const [email, setEmail] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [youtube, setYoutube] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [telegram, setTelegram] = useState('');
  const [signal, setSignal] = useState('');
  const [twitch, setTwitch] = useState('');
  const [pinterest, setPinterest] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [reddit, setReddit] = useState('');

  function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    );
    return !!pattern.test(str);
  }

  useEffect(() => {
    async function generateProfilePicUrl(key) {
      if (validURL(key)) {
        setAvatarUrl(key);
      } else {
        const link = await Storage.get(key);

        setAvatarUrl(link || '');
      }
    }

    generateProfilePicUrl(avatar);
  }, [avatar]);

  useEffect(() => {
    async function generateProfilePicUrl(key) {
      if (validURL(key)) {
        setBackgroundUrl(key);
      } else {
        const link = await Storage.get(key);

        setBackgroundUrl(link || '');
      }
    }

    generateProfilePicUrl(background);
  }, [background]);

  useEffect(() => {
    if (user) {
      // TODO: Remove this log
      console.log(user.attributes);

      setAvatar(
        user?.attributes?.picture
          ? user.attributes.picture
          : user?.attributes?.email
          ? `https://www.gravatar.com/avatar/${user.attributes.email}`
          : `https://eu.ui-avatars.com/api/?name=${user.username}`,
      );
      setBackground(
        user?.attributes?.['custom:background']
          ? user.attributes['custom:background']
          : '',
      );
      setBackgroundOpacity(
        user?.attributes?.['custom:backgroundOpacity']
          ? Boolean(user.attributes['custom:backgroundOpacity'])
          : true,
      );
      setName(user?.attributes?.name || '');
      setLocation(user?.attributes?.address || '');
      setHeadline(user?.attributes?.['custom:headline'] || '');
      setBio(user?.attributes?.['custom:bio'] || '');

      setLinks(
        user?.attributes?.['custom:links']
          ? JSON.parse(user.attributes['custom:links'])
          : [],
      );

      setEmail(user?.attributes?.email || '');
      setTwitter(user?.attributes?.['custom:twitter'] || '');
      setFacebook(user?.attributes?.['custom:facebook'] || '');
      setWhatsapp(user?.attributes?.['custom:whatsapp'] || '');
      setLinkedin(user?.attributes?.['custom:linkedin'] || '');
      setTelegram(user?.attributes?.['custom:telegram'] || '');
      setReddit(user?.attributes?.['custom:reddit'] || '');
      setPinterest(user?.attributes?.['custom:pinterest'] || '');
      setInstagram(user?.attributes?.['custom:instagram'] || '');
      setYoutube(user?.attributes?.['custom:youtube'] || '');
      setTwitch(user?.attributes?.['custom:twitch'] || '');
      setSignal(user?.attributes?.['custom:signal'] || '');
      setTiktok(user?.attributes?.['custom:tiktok'] || '');
    }
  }, []);

  useEffect(() => {
    const newSocials: {
      username?: string;
      external?: boolean;
      network?: string;
    }[] = [];

    const defaultSocialObject = {
      username: null,
      external: true,
      network: null,
    };

    if (email) {
      newSocials.push({
        ...defaultSocialObject,
        username: email,
        network: 'email',
      });
    }
    if (facebook) {
      newSocials.push({
        ...defaultSocialObject,
        username: facebook,
        network: 'facebook',
      });
    }
    if (instagram) {
      newSocials.push({
        ...defaultSocialObject,
        username: instagram,
        network: 'instagram',
      });
    }
    if (twitter) {
      newSocials.push({
        ...defaultSocialObject,
        username: twitter,
        network: 'twitter',
      });
    }
    if (youtube) {
      newSocials.push({
        ...defaultSocialObject,
        username: youtube,
        network: 'youtube',
      });
    }
    if (linkedin) {
      newSocials.push({
        ...defaultSocialObject,
        username: linkedin,
        network: 'linkedin',
      });
    }
    if (whatsapp) {
      newSocials.push({
        ...defaultSocialObject,
        username: whatsapp,
        network: 'whatsapp',
      });
    }
    if (telegram) {
      newSocials.push({
        ...defaultSocialObject,
        username: telegram,
        network: 'telegram',
      });
    }
    if (reddit) {
      newSocials.push({
        ...defaultSocialObject,
        username: reddit,
        network: 'reddit',
      });
    }
    if (signal) {
      newSocials.push({
        ...defaultSocialObject,
        username: signal,
        network: 'signal',
      });
    }
    if (twitch) {
      newSocials.push({
        ...defaultSocialObject,
        username: twitch,
        network: 'twitch',
      });
    }
    if (pinterest) {
      newSocials.push({
        ...defaultSocialObject,
        username: pinterest,
        network: 'pinterest',
      });
    }
    if (tiktok) {
      newSocials.push({
        ...defaultSocialObject,
        username: tiktok,
        network: 'tiktok',
      });
    }

    setSocials(newSocials);
  }, [
    email,
    facebook,
    instagram,
    twitter,
    youtube,
    linkedin,
    reddit,
    whatsapp,
    telegram,
    signal,
    twitch,
    pinterest,
    tiktok,
  ]);

  async function updateUser() {
    const user = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(user, {
      'custom:headline': headline,
      'custom:bio': bio,
      picture: avatar,
      address: location,
      'custom:background': background,
      'custom:backgroundOpacity': backgroundOpacity.toString(),
      email,
      'custom:facebook': facebook,
      'custom:instagram': instagram,
      'custom:twitter': twitter,
      'custom:youtube': youtube,
      'custom:linkedin': linkedin,
      'custom:reddit': reddit,
      'custom:whatsapp': whatsapp,
      'custom:telegram': telegram,
      'custom:signal': signal,
      'custom:twitch': twitch,
      'custom:tiktok': tiktok,
      'custom:pinterest': pinterest,
      'custom:socials': JSON.stringify(socials),
      'custom:links': JSON.stringify(links),
    });
  }

  const uploadAvatar = event => {
    if (event?.target?.files?.length > 0) {
      Storage.configure({
        level: 'public',
      });
      Storage.put(`avatars/${user.username}`, event.target.files[0], {
        contentType: event.target.files[0].type,
      })
        .then(async result => {
          setAvatar(result.key);
        })
        .catch(err => {
          logger.error(`Cannot uploading file: ${err}`);
        });
    }
  };

  const uploadBackground = event => {
    if (event?.target?.files?.length > 0) {
      Storage.configure({
        level: 'public',
      });
      Storage.put(`backgrounds/${user.username}`, event.target.files[0], {
        contentType: event.target.files[0].type,
      })
        .then(async result => {
          setBackground(result.key);
        })
        .catch(err => {
          logger.error(`Cannot uploading file: ${err}`);
        });
    }
  };

  return (
    <section className="relative w-full pt-4">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20">
        <div className="space-y-4 overflow-hidden lg:p-6 bg-cinder rounded-3xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="col-span-3 space-y-6">
              <div className="max-h-auto lg:max-h-screen overflow-visible lg:overflow-scroll">
                <div className="p-6 space-y-8 bg-pearl rounded-2xl">
                  <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                    <div>
                      <label
                        htmlFor="desktop-user-photo"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Avatar
                      </label>
                    </div>
                    <div className="flex flex-col items-center space-y-6 lg:space-y-0 lg:flex-row">
                      <div className="relative overflow-hidden  pt-4 pb-4 rounded-full">
                        <img
                          className="relative w-20 h-20 rounded-full"
                          src={avatarUrl}
                          alt={name || user.username}
                        />
                        <label
                          htmlFor="desktop-user-photo"
                          className="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium text-white bg-opacity-75 opacity-0 bg-pearl hover:opacity-100 focus-within:opacity-100"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                          <input
                            type="file"
                            id="desktop-user-photo"
                            name="user-photo"
                            onChange={uploadAvatar}
                            className="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer "
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                    <div>
                      <label
                        htmlFor="desktop-user-background"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Background
                      </label>
                    </div>
                    <div className="flex flex-col items-center space-y-6 lg:space-y-0 lg:flex-row">
                      <div className="relative overflow-hidden pt-4 pb-4">
                        <img
                          className="relative w-full h-40"
                          src={backgroundUrl}
                          alt={name || user.username}
                        />
                        <label
                          htmlFor="desktop-user-background"
                          className="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium text-white bg-opacity-75 opacity-0 bg-pearl hover:opacity-100 focus-within:opacity-100"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user background</span>
                          <input
                            type="file"
                            id="desktop-user-background"
                            name="user-background"
                            onChange={uploadBackground}
                            className="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer "
                          />
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                        <label
                          htmlFor="backgroundOpacity"
                          className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                        >
                          Show background overlay
                        </label>
                        <input
                          type="checkbox"
                          name="backgroundOpacity"
                          id="backgroundOpacity"
                          defaultChecked={backgroundOpacity}
                          className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                          onChange={e =>
                            setBackgroundOpacity(!!e.currentTarget.checked)
                          }
                        />
                      </div>
                      <span className="text-xs text-santa">
                        if this is checked, an overlay will be displayed above
                        the background.
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="name"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={name}
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Your Full Name"
                        onChange={e => setName(e.currentTarget.value || '')}
                      />
                    </div>
                    <span className="text-xs text-santa">
                      Please enter your full name here, we use it for displaying
                      your name in the app.
                    </span>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="address"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        defaultValue={location}
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Your Location"
                        onChange={e => setLocation(e.currentTarget.value || '')}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="headline"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Headline
                      </label>
                      <input
                        type="text"
                        name="headline"
                        id="headline"
                        defaultValue={headline}
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Profile Headline"
                        onChange={e => setHeadline(e.currentTarget.value || '')}
                      />
                    </div>
                    <span className="text-xs text-santa">
                      Enter a headline for your profile here, if empty, the
                      headline will be your name or username.
                    </span>
                  </div>
                  <div>
                    <div className="relative h-full px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="bio"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        <span>Bio</span>
                      </label>
                      <textarea
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        id="bio"
                        name="bio"
                        placeholder="Bio..."
                        required={true}
                        defaultValue={bio}
                        onChange={e => setBio(e.currentTarget.value || '')}
                      ></textarea>
                    </div>
                    <span className="text-xs text-santa">
                      This should be a brief description for your profile.
                    </span>
                  </div>
                  <div className="pb-6 border-b border-river">
                    <h3 className="text-lg font-normal leading-6 text-white">
                      Links
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                    <div>
                      <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                        <label
                          htmlFor="link-title"
                          className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                        >
                          Link Title
                        </label>
                        <input
                          type="text"
                          name="link-title"
                          id="link-title"
                          className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                          placeholder="Personal Website"
                        />
                      </div>
                      <span className="text-xs text-santa">
                        A title for this link
                      </span>
                    </div>
                    <div>
                      <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                        <label
                          htmlFor="link-url"
                          className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                        >
                          Link URL
                        </label>
                        <input
                          type="text"
                          name="link-url"
                          id="link-url"
                          className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                          placeholder="https://example.com"
                        />
                      </div>
                      <span className="text-xs text-santa">
                        The URL for this link
                      </span>
                    </div>
                    <div>
                      <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                        <label
                          htmlFor="link-primary"
                          className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                        >
                          Is this a primary link?
                        </label>
                        <input
                          type="checkbox"
                          name="link-primary"
                          id="link-primary"
                          defaultChecked={backgroundOpacity}
                          className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                          onChange={e =>
                            setBackgroundOpacity(!!e.currentTarget.checked)
                          }
                        />
                      </div>
                      <span className="text-xs text-santa">
                        if this is checked, the link will be displayed as a
                        primary button.
                      </span>
                    </div>
                  </div>

                  <div className="pb-6 border-b border-river">
                    <h3 className="text-lg font-normal leading-6 text-white">
                      Socials
                    </h3>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="email"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your address"
                        defaultValue={email}
                        onChange={e => setEmail(e.currentTarget.value || '')}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="facebook"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Facebook Page URL
                      </label>
                      <input
                        type="text"
                        name="facebook"
                        id="facebook"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your URL"
                        defaultValue={facebook}
                        onChange={e => setFacebook(e.currentTarget.value || '')}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="instagram"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Instagram Username
                      </label>
                      <input
                        type="text"
                        name="instagram"
                        id="instagram"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your username"
                        defaultValue={instagram}
                        onChange={e =>
                          setInstagram(e.currentTarget.value || '')
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="twitter"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Twitter Handle
                      </label>
                      <input
                        type="text"
                        name="twitter"
                        id="twitter"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your username"
                        defaultValue={twitter}
                        onChange={e => setTwitter(e.currentTarget.value || '')}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="youtube"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        YouTube URL
                      </label>
                      <input
                        type="text"
                        name="youtube"
                        id="youtube"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your URL"
                        defaultValue={youtube}
                        onChange={e => setYoutube(e.currentTarget.value || '')}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="linkedin"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        LinkedIn URL
                      </label>
                      <input
                        type="text"
                        name="linkedin"
                        id="linkedin"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your URL"
                        defaultValue={linkedin}
                        onChange={e => setLinkedin(e.currentTarget.value || '')}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="whatsapp"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        WhatsApp URL
                      </label>
                      <input
                        type="text"
                        name="whatsapp"
                        id="whatsapp"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your URL"
                        defaultValue={whatsapp}
                        onChange={e => setWhatsapp(e.currentTarget.value || '')}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="telegram"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Telegram URL
                      </label>
                      <input
                        type="text"
                        name="telegram"
                        id="telegram"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your URL"
                        defaultValue={telegram}
                        onChange={e => setTelegram(e.currentTarget.value || '')}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="reddit"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Reddit URL
                      </label>
                      <input
                        type="text"
                        name="reddit"
                        id="reddit"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your URL"
                        defaultValue={reddit}
                        onChange={e => setReddit(e.currentTarget.value || '')}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="signal"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Signal URL
                      </label>
                      <input
                        type="text"
                        name="signal"
                        id="signal"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your URL"
                        defaultValue={signal}
                        onChange={e => setSignal(e.currentTarget.value || '')}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="twitch"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Twitch URL
                      </label>
                      <input
                        type="text"
                        name="twitch"
                        id="twitch"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your URL"
                        defaultValue={twitch}
                        onChange={e => setTwitch(e.currentTarget.value || '')}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="pinterest"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Pinterest URL
                      </label>
                      <input
                        type="text"
                        name="pinterest"
                        id="pinterest"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your URL"
                        defaultValue={pinterest}
                        onChange={e =>
                          setPinterest(e.currentTarget.value || '')
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                      <label
                        htmlFor="tiktok"
                        className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                      >
                        Tiktok URL
                      </label>
                      <input
                        type="text"
                        name="tiktok"
                        id="tiktok"
                        className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                        placeholder="Enter your URL"
                        defaultValue={tiktok}
                        onChange={e => setTiktok(e.currentTarget.value || '')}
                      />
                    </div>
                  </div>
                  <div className="flex mt-12">
                    <button
                      type="submit"
                      onClick={() => updateUser()}
                      className="block px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform tems-center bg-majorelly rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      Save profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden overflow-hidden bg-pearl rounded-2xl lg:block">
              <ProfileComponent
                profile={{
                  username: user.username,
                  fullname: name,
                  avatar: avatarUrl,
                  background: backgroundUrl,
                  backgroundOpacity,
                  headline: headline || name,
                  bio,
                  links: links,
                  social: socials,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
