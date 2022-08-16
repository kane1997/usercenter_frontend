import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'Kane Zhao出品',
    defaultMessage: 'Kane Zhao出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'konec_prod',
          title: 'konec',
          href: 'https://www.konec.com.au/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> Kane Zhao{' '}
            </>
          ),
          href: 'https://github.com/kane1997',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'HugoBoss',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
