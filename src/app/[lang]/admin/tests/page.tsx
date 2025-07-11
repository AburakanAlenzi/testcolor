import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import DataImportExport from '@/components/admin/DataImportExport';
import TestsManagement from '@/components/admin/TestsManagement';

interface PageProps {
  params: Promise<{
    lang: Language;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: lang === 'ar' ? 'إدارة الاختبارات - اختبارات الألوان' : 'Tests Management - Color Testing',
    description: lang === 'ar' ? 'إدارة الاختبارات الكيميائية' : 'Manage chemical tests',
  };
}

export default async function TestsManagementPage({ params }: PageProps) {
  const { lang } = await params;

  // Validate language
  if (!['ar', 'en'].includes(lang)) {
    notFound();
  }

  const isRTL = lang === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Tests Management */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
            <TestsManagement isRTL={isRTL} />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4 rtl:mr-4 rtl:ml-0">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {isRTL ? 'إجمالي الاختبارات' : 'Total Tests'}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">15</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div className="ml-4 rtl:mr-4 rtl:ml-0">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {isRTL ? 'النتائج اللونية' : 'Color Results'}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">55</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div className="ml-4 rtl:mr-4 rtl:ml-0">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {isRTL ? 'المستخدمين النشطين' : 'Active Users'}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">24</p>
                </div>
              </div>
            </div>
          </div>

          {/* Management Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {isRTL ? 'إدارة الاختبارات' : 'Tests Management'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {isRTL ? 'إضافة وتحرير وحذف الاختبارات الكيميائية' : 'Add, edit, and delete chemical tests'}
              </p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  {isRTL ? 'عرض جميع الاختبارات' : 'View All Tests'}
                </Button>
                <Button className="w-full" variant="outline">
                  {isRTL ? 'إضافة اختبار جديد' : 'Add New Test'}
                </Button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {isRTL ? 'إدارة النتائج' : 'Results Management'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {isRTL ? 'إدارة نتائج الألوان والتفسيرات' : 'Manage color results and interpretations'}
              </p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  {isRTL ? 'عرض النتائج' : 'View Results'}
                </Button>
                <Button className="w-full" variant="outline">
                  {isRTL ? 'إضافة نتيجة جديدة' : 'Add New Result'}
                </Button>
              </div>
            </div>
          </div>

          {/* Data Import/Export */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {isRTL ? 'إدارة البيانات' : 'Data Management'}
            </h3>
            <DataImportExport isRTL={isRTL} />
          </div>

          {/* Back to Admin */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <Button asChild className="w-full">
              <Link href={`/${lang}/admin`}>
                {isRTL ? 'العودة إلى لوحة الإدارة' : 'Back to Admin Panel'}
              </Link>
            </Button>
          </div>

          {/* Development Notice */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3 rtl:mr-3 rtl:ml-0">
                <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  {isRTL ? 'قيد التطوير' : 'Under Development'}
                </h3>
                <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <p>
                    {isRTL
                      ? 'هذه الصفحة قيد التطوير. الوظائف الكاملة ستكون متاحة قريباً.'
                      : 'This page is under development. Full functionality will be available soon.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
