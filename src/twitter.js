
// https://twitter.com/[screen_name]/profile_image?size=original
// https://twitter.com/SenecaCollege/profile_image?size=original

/**
 * 
 * Your username cannot be longer than 15 characters. Your name can be longer (50 characters), but usernames are kept shorter for the sake of ease.
A username can only contain alphanumeric characters (letters A-Z, numbers 0-9) with the exception of underscores, as noted above. Check to make sure your desired username doesn't contain any symbols, dashes, or spaces.
} name 
 */

function isValidName(name) {
  return /^[A-Za-z0-9_]{1,15}$/.test(name);
}

// https://twitter.com/[screen_name]/profile_image?size=original
// https://twitter.com/SenecaCollege/profile_image?size=original
function getProfileUrl(name) {
  if(!isValidName(name)) {
    return null;
  }

  return 'https://twitter.com/' + name + '/profile_image?size=original';
}

exports.isValidName = isValidName;
exports.getProfileUrl = getProfileUrl;




















