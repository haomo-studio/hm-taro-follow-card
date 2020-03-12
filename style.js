import Taro from '@tarojs/taro';
export default {
  hmFollowCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Taro.pxTransform(750),
    height: Taro.pxTransform(799)
  },
  container: {
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'column',
    borderRadius: Taro.pxTransform(39),
    boxShadow: '0px 10px 30px rgba(209, 213, 223, 0.50)',
    backgroundColor: '#ffffff',
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(721),
    overflow: 'hidden'
  },
  backgroudImage: {
    position: 'absolute',
    top: Taro.pxTransform(0),
    left: Taro.pxTransform(0),
    borderRadius: Taro.pxTransform(39),
    boxShadow: '0px 10px 30px rgba(209, 213, 223, 0.50)',
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(721),
    overflow: 'hidden'
  },
  cardHeader: {
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1))',
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(195)
  },
  followButton: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Taro.pxTransform(58),
    marginLeft: Taro.pxTransform(530),
    borderRadius: Taro.pxTransform(23),
    backgroundColor: '#f64000',
    paddingRight: Taro.pxTransform(21),
    paddingLeft: Taro.pxTransform(19),
    height: Taro.pxTransform(49)
  },
  followText: {
    opacity: 1,
    lineHeight: Taro.pxTransform(35),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontSize: Taro.pxTransform(23),
    fontWeight: 400
  },
  cardBottom: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Taro.pxTransform(331),
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))',
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(195)
  },
  name: {
    opacity: 1,
    marginLeft: Taro.pxTransform(58),
    width: Taro.pxTransform(156),
    height: Taro.pxTransform(47),
    lineHeight: Taro.pxTransform(47),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontSize: Taro.pxTransform(31),
    fontWeight: 400
  },
  personImage: {
    marginTop: Taro.pxTransform(4),
    marginLeft: Taro.pxTransform(230),
    width: Taro.pxTransform(35),
    height: Taro.pxTransform(35)
  },
  fanNumbers: {
    opacity: 1,
    marginTop: Taro.pxTransform(4),
    marginLeft: Taro.pxTransform(16),
    width: Taro.pxTransform(41),
    height: Taro.pxTransform(35),
    lineHeight: Taro.pxTransform(35),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontFamily: 'Helvetica',
    fontSize: Taro.pxTransform(23),
    fontWeight: 'normal'
  },
  fanNumbersCompany: {
    opacity: 1,
    marginTop: Taro.pxTransform(4),
    width: Taro.pxTransform(21),
    height: Taro.pxTransform(35),
    lineHeight: Taro.pxTransform(35),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontSize: Taro.pxTransform(23),
    fontWeight: 400
  },
  likeImage: {
    marginTop: Taro.pxTransform(6),
    marginLeft: Taro.pxTransform(14),
    width: Taro.pxTransform(35),
    height: Taro.pxTransform(29)
  },
  likeNumbers: {
    opacity: 1,
    marginTop: Taro.pxTransform(4),
    marginLeft: Taro.pxTransform(16),
    width: Taro.pxTransform(41),
    height: Taro.pxTransform(35),
    lineHeight: Taro.pxTransform(35),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontFamily: 'Helvetica',
    fontSize: Taro.pxTransform(23),
    fontWeight: 'normal'
  },
  likeNumbersCompany: {
    opacity: 1,
    marginTop: Taro.pxTransform(4),
    width: Taro.pxTransform(21),
    height: Taro.pxTransform(35),
    lineHeight: Taro.pxTransform(35),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontSize: Taro.pxTransform(23),
    fontWeight: 400
  }
};
